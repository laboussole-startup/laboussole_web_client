
declare var FFmpeg: any;

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ChatMessagesService } from '../services/chat-messages.service';
import { UserServiceService } from '../services/user-service.service';
import { Firestore, doc, updateDoc, arrayUnion } from '@angular/fire/firestore';
import { Timestamp } from 'firebase/firestore'; // Firebase Timestamp



@Component({
  selector: 'app-expert-message-content-chat',
  templateUrl: './expert-message-content-chat.component.html',
  styleUrls: ['./expert-message-content-chat.component.scss']
})
export class ExpertMessageContentChatComponent {

  messages:Array<any> = [];


  ffmpeg: any;
  audioURL: string | null = null;


  @Output() backToMessageList = new EventEmitter<string>();
  isGroupChat:boolean=false;



  chatDetails:any;
  standardizedMessages:Array<any> = new Array();
  title:string="";

  isRecording = false;

  mediaRecorder: any;
  audioChunks: any[] = [];
  audioBlob: Blob | null = null;

  constructor(private chatMessage:ChatMessagesService,
    private userService:UserServiceService,
    private firestore: Firestore){
      this.initializeFFmpeg();
  }


  ngOnInit(){
    this.chatDetails = this.chatMessage.messages;
    if(this.chatDetails.Participants){
      this.isGroupChat=true;
    }
    if(this.chatDetails.Nom){
      this.title = this.chatDetails.Nom
    }else{
      let user_id:any = localStorage.getItem('user_id');
      let membs = this.chatDetails.Membres;
          let recipient_id:any;
          if(membs[0]==user_id){
            
            recipient_id = membs[1];
            console.log("recipient id is ",recipient_id)
          }else{
            recipient_id=membs[0];
          }
          this.userService.getUserNameById(recipient_id).subscribe((name:any)=> {
           this.title = name.username;
          },
          (error: any)=>{
            console.error(error);
          }
          )
    }
    this.messages = this.chatMessage.messages.message_list;
    let last_message = this.messages[this.messages.length-1];
    console.log("**** message_list *************",this.messages)
    console.log("last group message id is",this.chatMessage.chatId);

    const milliseconds = last_message.date_sent.seconds * 1000 + last_message.date_sent.nanoseconds / 1e6;
    // Create Date object
    const date = new Date(milliseconds);

    const dateString = date.toISOString();

    // Step 2: Save the string in localStorage
    localStorage.setItem(this.chatMessage.messages.id, dateString);
    for(let message of this.messages){
      let txt:string = message.content;
      const milliseconds = message.date_sent.seconds * 1000 + message.date_sent.nanoseconds / 1e6;
      // Create Date object
      const dt = new Date(milliseconds);
      let  timestamp:Date = dt;

      let user_id:any = localStorage.getItem('user_id');
      let isSt:boolean=false;

      if(message.sender){
        isSt = user_id == message.sender;
      }else{
        isSt = user_id == message.sender_id;
      }

      
      
      this.standardizedMessages.push(
        {
          text:txt,
          timestamp:timestamp,
          isSent:isSt
        }
      )
    }
    //console.log("chat details is ",this.chatDetails)
  }


  newMessage = '';

  pushMessage() {
    if (this.newMessage.trim()) {
      let user_id:number = localStorage.getItem('user_id') as unknown as number
      this.standardizedMessages.push({ text: this.newMessage, timestamp: new Date(), isSent: true });
      if(this.isGroupChat){
        this.sendGroupMessage(this.chatMessage.messages.id,this.newMessage,user_id)
      }else{
        this.sendPrivateMessage(this.chatMessage.messages.id,this.newMessage,user_id)
      }
      
      console.log(this.chatMessage.messages.id)
      this.newMessage = '';

    }
  }

  backToList(){
    this.backToMessageList.emit("back");
  }

  async sendPrivateMessage(chatId: string, message: string, senderId: number) {
    const chatDocRef = doc(this.firestore, `privateChats/${chatId}`);

    // Create the new message object
    const newMessage = {
      content: message,
      date_sent: Timestamp.now(),
      sender: senderId,
    };

    try {
      // Update the document by pushing the new message to the message_list array
      await updateDoc(chatDocRef, {
        message_list: arrayUnion(newMessage),
        last_message_date_sent: Timestamp.now(), // Also update the last message time
      });
      console.log('Message sent successfully!');
    } catch (error) {
      console.error('Error sending message: ', error);
    }
  }

  async sendGroupMessage(chatId: string, message: string, senderId: number) {
    const chatDocRef = doc(this.firestore, `groupChats/${chatId}`);

    // Create the new message object
    const newMessage = {
      content: message,
      date_sent: Timestamp.now(),
      sender: senderId,
    };

    try {
      // Update the document by pushing the new message to the message_list array
      await updateDoc(chatDocRef, {
        message_list: arrayUnion(newMessage),
        last_message_date_sent: Timestamp.now(), // Also update the last message time
      });
      console.log('Message sent successfully!');
    } catch (error) {
      console.error('Error sending message: ', error);
    }
  }

  onFileSelected(event: any) {
    const files: FileList = event.target.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      // Handle the selected file (upload or attach it to the message)
      console.log(file);
    }
  }

  async toggleRecording() {
    if (this.isRecording) {
      this.stopRecording();
    } else {
      await this.startRecording();
    }
  }

  async startRecording() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.mediaRecorder = new MediaRecorder(stream, { mimeType: 'audio/webm' });

      this.mediaRecorder.ondataavailable = (event: any) => {
        if (event.data.size > 0) {
          this.audioChunks.push(event.data);
        }
      };

      this.mediaRecorder.onstop = () => {
        this.audioBlob = new Blob(this.audioChunks, { type: 'audio/webm' });
        this.audioURL = URL.createObjectURL(this.audioBlob); // Create a URL for playback
        this.audioChunks = []; // Clear the chunks after the recording is done
      };

      this.mediaRecorder.start();
      this.isRecording = true;
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }

  stopRecording() {
    this.mediaRecorder.stop();
    this.isRecording = false;
  }

  // Optional: function to send or process audioBlob
  sendAudioMessage() {
    if (this.audioBlob) {
      // Send the recorded audioBlob to the server or further process it
      console.log('Sending audio message:', this.audioBlob);
    }
    this.resetAudioRecording();
  }

  async initializeFFmpeg() {
    this.ffmpeg = FFmpeg.createFFmpeg({ log: true });
    await this.ffmpeg.load();
  }

  async fetchFile(file: File): Promise<Uint8Array> {
    const response = await fetch(URL.createObjectURL(file));
    const arrayBuffer = await response.arrayBuffer();
    return new Uint8Array(arrayBuffer);
  }

  async compressAudio(audioBlob: Blob) {
    const audioFile = new File([audioBlob], 'audio.webm', { type: 'audio/webm' });

    // Write the audio file to the ffmpeg file system
    await this.ffmpeg.FS('writeFile', 'audio.webm', await this.fetchFile(audioFile));

    // Compress the audio using ffmpeg
    await this.ffmpeg.run('-i', 'audio.webm', '-b:a', '64k', 'output.mp3');

    // Read the compressed file from ffmpeg's file system
    const data = this.ffmpeg.FS('readFile', 'output.mp3');
    const compressedBlob = new Blob([data.buffer], { type: 'audio/mp3' });

    // Create a URL for the compressed file to be played back
    this.audioURL = URL.createObjectURL(compressedBlob);
    console.log('Compressed audio:', compressedBlob);
  }

resetAudioRecording() {
    this.audioURL = null;
    this.isRecording = false;
    // Optionally, you might want to stop any ongoing recording process here
  }


}
