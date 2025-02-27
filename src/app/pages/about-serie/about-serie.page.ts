import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonText, IonList, IonListHeader, IonItem, IonLabel, IonAvatar} from '@ionic/angular/standalone';

@Component({
  selector: 'app-about-serie',
  templateUrl: './about-serie.page.html',
  styleUrls: ['./about-serie.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonText, IonList, IonListHeader, IonItem, IonLabel, IonAvatar]
})
export class AboutSeriePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
