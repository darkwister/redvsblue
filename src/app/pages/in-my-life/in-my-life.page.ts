import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-in-my-life',
  templateUrl: './in-my-life.page.html',
  styleUrls: ['./in-my-life.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class InMyLifePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
