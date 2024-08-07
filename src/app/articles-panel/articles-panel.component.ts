import { Component } from '@angular/core';

@Component({
  selector: 'app-articles-panel',
  templateUrl: './articles-panel.component.html',
  styleUrls: ['./articles-panel.component.scss']
})
export class ArticlesPanelComponent {
  setActiveTab(activeTab: HTMLElement) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    activeTab.classList.add('active');
    // Add additional logic here for displaying content related to the active tab
  }
  showArticleContent:boolean=false;
  posts = [
    {
      username: 'User1',
      time: '2 hours ago',
      content: 'Your portfolio is stopping you from getting that job.'
    },
    {
      username: 'User2',
      time: '5 hours ago',
      content: 'An intense way to learn about the process and practice your design skills.'
    },
    // Add more posts as needed
  ];

  openArticle(e:any){
    console.log(e);
    this.showArticleContent=true;
  }
}
