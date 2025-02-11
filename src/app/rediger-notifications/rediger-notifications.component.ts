import { Component, EventEmitter, Output, TemplateRef, ViewChild } from '@angular/core';
import { Firestore, doc, updateDoc, arrayUnion } from '@angular/fire/firestore';
import { Timestamp } from 'firebase/firestore'; // Firebase Timestamp
import { Storage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';
import { ActualitesService } from '../services/actualites.service';
import { MatBottomSheet, MatBottomSheetConfig } from '@angular/material/bottom-sheet';
import { NotificationsService } from '../services/notifications.service';
import { FileUploadService } from '../services/file-upload.service';
import { S3Client, PutObjectCommand, PutObjectCommandInput, ObjectCannedACL } from '@aws-sdk/client-s3';
import { environment } from '../../environments/environment';
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

  s3Client = new S3Client({
    region: environment.aws.region,
    credentials: {
      accessKeyId: environment.aws.accessKeyId,
      secretAccessKey: environment.aws.secretAccessKey
    }
  });
  bucketName: string = environment.aws.bucketName;

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
    if (file) {
      // Générer un chemin de fichier unique (ex: uploads/1618033988749_monFichier.jpg)
      const filePath = `uploads/${Date.now()}_${file.name}`;

      // Utiliser FileReader pour convertir le fichier en ArrayBuffer
      const reader = new FileReader();
      reader.onload = () => {
        if (!reader.result) {
          console.error('La lecture du fichier a renvoyé null.');
          return;
        }
        // Conversion en Uint8Array pour satisfaire le typage attendu par AWS S3
        const arrayBuffer = new Uint8Array(reader.result as ArrayBuffer);

        // Préparation des paramètres pour l'upload
        const params: PutObjectCommandInput = {
          Bucket: this.bucketName,
          Key: filePath,
          Body: arrayBuffer, // On passe l'Uint8Array
          ContentType: file.type,
          ACL: 'public-read' as ObjectCannedACL
        };

        // Création et envoi de la commande d'upload
        const command = new PutObjectCommand(params);
        this.s3Client.send(command)
          .then(() => {
            // Construction de l'URL publique du fichier
            const url = `https://${this.bucketName}.s3.${environment.aws.region}.amazonaws.com/${filePath}`;
            console.log('Fichier uploadé. URL de téléchargement:', url);
            this.image_preview = url;
          })
          .catch((error) => {
            console.error('Erreur lors de l\'upload du fichier:', error);
          });
      };

      reader.onerror = (error) => {
        console.error('Erreur lors de la lecture du fichier:', error);
      };

      // Démarrer la lecture du fichier en ArrayBuffer
      reader.readAsArrayBuffer(file);
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
