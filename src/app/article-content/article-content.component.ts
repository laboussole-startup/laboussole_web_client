import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-article-content',
  templateUrl: './article-content.component.html',
  styleUrls: ['./article-content.component.scss']
})
export class ArticleContentComponent {

  @Output() back_to_articl_list = new EventEmitter<any>();


  @Input() article_image!:string;
  @Input() author_name!:string;
  @Input() content!:any;
  @Input() title!:string;
  @Input() date!:any;
  @Input() article_object:any;

  backToArticleList(){
    this.back_to_articl_list.emit("true");
  }
}
