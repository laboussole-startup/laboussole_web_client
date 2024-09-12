import { Component } from '@angular/core';
import { ActualitesService } from '../services/actualites.service';

@Component({
  selector: 'app-articles-panel',
  templateUrl: './articles-panel.component.html',
  styleUrls: ['./articles-panel.component.scss']
})
export class ArticlesPanelComponent {

  show_editor:boolean=false;
  actualits:any;
  showArticleContent:boolean=false;

  article_to_display:any;
  constructor(private actualitService:ActualitesService){

  }


  setActiveTab(activeTab: HTMLElement) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    activeTab.classList.add('active');
    // Add additional logic here for displaying content related to the active tab
  }

  

  ngOnInit(): void {
    const senderId = localStorage.getItem('user_id');  // Example sender_id, you can replace it with dynamic data
    this.actualitService.getActualitBySenderId(senderId).subscribe(
      (response) => {
        this.actualits = response;
        console.log(this.actualits);
      },
      (error) => {
        console.error('Error fetching actualit:', error);
      }
    );
  }

  openArticle(e:any){
    console.log(e);
    this.showArticleContent=true;
    this.article_to_display=e;
  }
}
