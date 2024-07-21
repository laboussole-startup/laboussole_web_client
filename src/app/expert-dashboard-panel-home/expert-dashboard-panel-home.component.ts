import { Component } from '@angular/core';

@Component({
  selector: 'app-expert-dashboard-panel-home',
  templateUrl: './expert-dashboard-panel-home.component.html',
  styleUrls: ['./expert-dashboard-panel-home.component.scss']
})
export class ExpertDashboardPanelHomeComponent {
  userName: string="Bella Bella";
  date?: Date;

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
