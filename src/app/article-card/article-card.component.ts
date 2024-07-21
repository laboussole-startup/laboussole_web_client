import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent {
  @Output() articleClicked = new EventEmitter<string>();

  openArticle(){
    this.articleClicked.emit("id");
  }
}
