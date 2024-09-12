import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent {

  @Output() articleClicked = new EventEmitter<any>();

  @Input() article_image!:string;
  @Input() author_name!:string;
  @Input() content!:any;
  @Input() title!:string;
  @Input() date!:any;
  @Input() article_object:any;

  openArticle(){
    this.articleClicked.emit(this.article_object);
  }

  sanitizeHTML(htmlContent: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(htmlContent);
  }

  constructor(private sanitizer: DomSanitizer,){

  }
}
