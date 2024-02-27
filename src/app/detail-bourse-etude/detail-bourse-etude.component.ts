import { Component } from '@angular/core';

@Component({
  selector: 'app-detail-bourse-etude',
  templateUrl: './detail-bourse-etude.component.html',
  styleUrls: ['./detail-bourse-etude.component.scss']
})
export class DetailBourseEtudeComponent {
  isMenuIconClicked = false;
  isMenuIconClosed = true;
  showSearchBar = false;

  toggleMenu() {
    this.isMenuIconClicked = !this.isMenuIconClicked;
    this.isMenuIconClosed = !this.isMenuIconClosed;
  }

  affichageDetail():void{
    const accordionItems=document.querySelectorAll('accordion-item');
    accordionItems.forEach(accordionItem =>{
      const accordionHeader=accordionItem.querySelector('accordion-header');
      const accordionContent=accordionItem.querySelector('accordion-content');

      accordionHeader?.addEventListener('click', () =>{
        accordionItems.forEach(item =>{
          if (item !==accordionItem){
            item.querySelector('accordion-content')?.classList.remove('active');
          }
        });
        accordionContent?.classList.toggle('active');
      });
    });
  }
}
