import { Component, EventEmitter, Output, TemplateRef, ViewChild } from '@angular/core';
import { Firestore, doc, updateDoc, arrayUnion } from '@angular/fire/firestore';
import { Timestamp } from 'firebase/firestore'; // Firebase Timestamp
import { Storage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';
import { ActualitesService } from '../services/actualites.service';
import { MatBottomSheet, MatBottomSheetConfig } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-write-article',
  templateUrl: './write-article.component.html',
  styleUrls: ['./write-article.component.scss']
})
export class WriteArticleComponent {
  content:any;
  author:any;
  title:any;
  image_preview:any;
  domaine:any;

  @Output() backToList = new EventEmitter<string>();

  @ViewChild('errorSheet') errorSheetTemplate = {} as TemplateRef<any>;

  sheetErrorMessage:string="";

  constructor(private firestore: Firestore,private storage: Storage, private actualite_service:ActualitesService,
    private bottomSheet: MatBottomSheet){

  }

  publishArticle(){
    this.sheetErrorMessage="Publication en cours";
    this.openBottomSheet();
    const formattedDate = new Date().toISOString().split('T')[0];  // Formats date as YYYY-MM-DD
    console.log(this.content);
    this.actualite_service.postArticle(this.title, formattedDate, this.author, this.content, this.domaine, this.image_preview, this.image_preview, this.image_preview).subscribe(
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
