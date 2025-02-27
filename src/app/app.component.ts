
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink, IonFab, IonFabButton, IonFabList } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {homeSharp, homeOutline, peopleSharp,peopleOutline, eyeSharp, eyeOutline, helpSharp, helpOutline, callSharp, callOutline, home, help, people, call } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [RouterLink, RouterLinkActive, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet, IonFab, IonFabButton, IonFabList],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/home', icon: 'home' },
    { title: 'Personajes', url: '/characters', icon: 'people' },
    { title: 'Acerca de', url: '/about-serie', icon: 'help' },
    { title: 'En mi vida', url: '/in-my-life', icon: 'eye' },
    { title: 'Contrateme', url: '/hire-me', icon: 'call' },
  ];
  constructor() {
    addIcons({home, help, people,call , homeOutline, homeSharp, peopleOutline, peopleSharp, eyeOutline, eyeSharp, helpOutline, helpSharp, callOutline, callSharp});
  }
}
