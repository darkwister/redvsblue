import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonList, IonItem, IonLabel, IonAvatar, IonImg, IonIcon, IonRow} from '@ionic/angular/standalone';
import { logoGithub, logoLinkedin } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-hire-me',
  templateUrl: './hire-me.page.html',
  styleUrls: ['./hire-me.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,  IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonList, IonItem, IonLabel, IonAvatar, IonImg, IonIcon, IonRow]
})
export class HireMePage implements OnInit {

  constructor() { 
    addIcons({logoGithub, logoLinkedin});
  }

  ngOnInit() {
  }

}
