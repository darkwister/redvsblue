import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MomentsComponent, momentsList } from '../moments/moments.component';
import {IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle, IonAvatar} from '@ionic/angular/standalone';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
  imports: [CommonModule, MomentsComponent, IonCard, IonCardContent, IonCardTitle, IonCardSubtitle, IonCardHeader, IonAvatar],
  standalone: true
})
export class CharacterComponent  implements OnInit {

  @Input() character!: Character;
  constructor() { }

  ngOnInit() {}
}

export interface Character {
  name: string;
  description: string;
  faction: string;
  image: string;
  moments: momentsList[];
}
