import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonText, IonList, IonListHeader, IonItem, IonLabel, IonAvatar, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonImg} from '@ionic/angular/standalone';
import { personajes } from '../characters/characters.page';

@Component({
  selector: 'app-about-serie',
  templateUrl: './about-serie.page.html',
  styleUrls: ['./about-serie.page.scss'],
  standalone: true,
  imports: [ IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonText, IonList, IonListHeader, IonItem, IonLabel, IonAvatar, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonImg]
})
export class AboutSeriePage implements OnInit {
  personajes = personajes;
  constructor() { 
  }

  ngOnInit() {
  }

}
