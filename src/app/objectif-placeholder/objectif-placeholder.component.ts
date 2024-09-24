import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-objectif-placeholder',
  templateUrl: './objectif-placeholder.component.html',
  styleUrls: ['./objectif-placeholder.component.scss']
})
export class ObjectifPlaceholderComponent {
  readonly panelOpenState = signal(false);
}
