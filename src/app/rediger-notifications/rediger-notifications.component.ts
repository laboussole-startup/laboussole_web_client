import { Component, EventEmitter, Output, TemplateRef, ViewChild } from '@angular/core';
import { Firestore, doc, updateDoc, arrayUnion } from '@angular/fire/firestore';
import { Timestamp } from 'firebase/firestore'; // Firebase Timestamp
import { Storage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';
import { ActualitesService } from '../services/actualites.service';
import { MatBottomSheet, MatBottomSheetConfig } from '@angular/material/bottom-sheet';
import { NotificationsService } from '../services/notifications.service';
import { FileUploadService } from '../services/file-upload.service';

@Component({
  selector: 'app-rediger-notifications',
  templateUrl: './rediger-notifications.component.html',
  styleUrls: ['./rediger-notifications.component.scss']
})
export class RedigerNotificationsComponent {
  contenu:any = "";
  nationalite:any = "tous";
  titre:any;
  image_preview:any="aucune";
  file_preview:any="aucun";
  statut:any = "aucune";

  @Output() backToList = new EventEmitter<string>();

  @ViewChild('errorSheet') errorSheetTemplate = {} as TemplateRef<any>;

  sheetErrorMessage:string="";

  constructor(private firestore: Firestore,private storage: Storage, private notif_service:NotificationsService,
    private bottomSheet: MatBottomSheet, private file_service:FileUploadService){

  }

  publishArticle(){
    this.sheetErrorMessage="Publication en cours";
    this.openBottomSheet();
    const formattedDate = new Date().toISOString().split('T')[0];  // Formats date as YYYY-MM-DD
    console.log(this.contenu);
    this.notif_service.postNotification(this.titre, this.contenu,this.statut,
      this.nationalite, formattedDate, 
       this.image_preview, this.image_preview, this.file_preview).subscribe(

      (data:any) => {
         console.log(data);
         this.sheetErrorMessage="Publication Reussie";
         this.openBottomSheet();
      },
      (error) => {
        this.sheetErrorMessage="Une erreure est survenue, veuillez reessayer";
        this.openBottomSheet();
         console.error("An error occurred:", error);
      }
    )
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];

    
    if(file){
      const filePath = `uploads/${Date.now()}_${file.name}`;
      const storageRef = ref(this.storage, filePath);
      
      // Upload the file
      uploadBytes(storageRef, file).then((snapshot) => {
        // Get the download URL
        getDownloadURL(storageRef).then((url) => {
         // this.downloadURL = url;
          console.log('File uploaded. Download URL:', url);
          this.image_preview=url;
         
        });

      }).catch((error) => {
        console.error('Error uploading file:', error);
      });
    }
  }
  onPDFSelected(event: any) {
    const file = event.target.files[0];
    
    if(file){
      this.file_service.postFILE(file).subscribe(
        (data:any)=>{
          console.log(data.url);
          this.file_preview='https://api.laboussole-edu.com'+data.url;
          this.statut = 'pdf';
          
        },
        (error)=>{
          console.log(error);
        }
      )
    }
  }
  openBottomSheet(config?: MatBottomSheetConfig){
    this.bottomSheet.open(this.errorSheetTemplate, config);
  }
  closeBottomSheet(){
    this.bottomSheet.dismiss(this.errorSheetTemplate);
  }
  backToArticleList(){
    this.backToList.emit("true");
  }

}
