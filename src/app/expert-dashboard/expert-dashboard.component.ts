import { Component } from '@angular/core';

@Component({
  selector: 'app-expert-dashboard',
  templateUrl: './expert-dashboard.component.html',
  styleUrls: ['./expert-dashboard.component.scss']
})
export class ExpertDashboardComponent {
  panel_number:number=1;
changePanel(n: number) {
  this.panel_number=n;
}

  userName: string="Bella Bella";
  date?: Date;


  constructor(){
    
  }
  ngOnInit(){
    const date = this.date ? this.date.toLocaleDateString() : new Date().toLocaleDateString();
    const greeting = `Welcome sur votre tableau de bord ${this.userName}!`;

    const dateElement = document.querySelector('.card .date');
    console.log(dateElement)
    const greetingElement = document.querySelector('.card h1');
    console.log(greetingElement)

    if (dateElement) {
      console.log("date elements exists")
        dateElement.textContent = `Date du jour ${date}`;
    }

    if (greetingElement) {
      console.log("greeting elements exists")
        greetingElement.textContent = greeting;
    }
  }
}
