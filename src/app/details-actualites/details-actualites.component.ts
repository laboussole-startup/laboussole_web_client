import { Component,OnInit } from '@angular/core';
import { Article } from '../Models/article';
import { ActualitesService } from '../services/actualites.service';

@Component({
  selector: 'app-details-actualites',
  templateUrl: './details-actualites.component.html',
  styleUrls: ['./details-actualites.component.scss']
})
export class DetailsActualitesComponent {

  currentArticle!:Article;

  constructor(private articleService:ActualitesService){

  }

  ngOnInit(){
    this.fetchCurrentArticle();
  }
  fetchCurrentArticle(){
    this.articleService.getArticleById(this.articleService.currentArticleId).subscribe(
      (data:any)=>{
        console.log(data);
        this.currentArticle = data as Article;
        let im:string | null = this.convertDriveLinkToDirectDownloadLink(this.currentArticle.image_pc);
        this.currentArticle.image_pc = im?im:"";
      }
    )
  }

  convertDriveLinkToDirectDownloadLink(driveLink: string): string | null {
    if(driveLink){
      const regexDirectDownload = /https:\/\/drive\.google\.com\/thumbnail\?&id=([^/]+)/;
      const matchDirectDownload = driveLink.match(regexDirectDownload);
  
      if (matchDirectDownload && matchDirectDownload.length === 2) {
          // The link is already in the desired format, return it as is
          return driveLink;
      }
  
      // Check if the provided link matches the Google Drive file link pattern
      const regexFileLink = /https:\/\/drive\.google\.com\/file\/d\/([^/]+)\/view\?usp=sharing/;
      const matchFileLink = driveLink.match(regexFileLink);
  
      if (matchFileLink && matchFileLink.length === 2) {
          const fileId = matchFileLink[1];
          const directDownloadLink = `https://drive.google.com/thumbnail?&id=${fileId}`;
          return directDownloadLink;
      } else {
          console.error("Invalid Google Drive shareable link format.");
          return null;
      }
    }else{
      return null;
    }
  }
}
