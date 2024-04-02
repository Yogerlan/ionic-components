import { Component, Input } from '@angular/core';
import { IonBackButton, IonButtons, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    IonBackButton,
    IonButtons,
    IonHeader,
    IonTitle,
    IonToolbar,
  ]
})
export class HeaderComponent {
  @Input() title = '';
}
