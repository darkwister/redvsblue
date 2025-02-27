import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonItem, IonList, IonGrid, IonCol, IonRow,} from '@ionic/angular/standalone';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-moments',
  templateUrl: './moments.component.html',
  styleUrls: ['./moments.component.scss'],
  imports: [ CommonModule, IonItem, IonList, IonGrid, IonCol, IonRow,],
  standalone: true
})
export class MomentsComponent  implements OnInit {

  @Input() moments!: momentsList[];
  safeUrls: SafeResourceUrl[] = [];

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.safeUrls = this.moments.map(m => this.sanitizer.bypassSecurityTrustResourceUrl(m.url));
  }
}

export interface momentsList {
  url: string;
}
