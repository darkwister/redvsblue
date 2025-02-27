import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from '@ionic/angular';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SwiperOptions, Swiper } from 'swiper/types';


@Component({
  selector: 'app-moments',
  templateUrl: './moments.component.html',
  styleUrls: ['./moments.component.scss'],
  imports: [ CommonModule, IonicModule],
  standalone: true
})
export class MomentsComponent  implements OnInit {

  slidesOptions: SwiperOptions = {
    initialSlide: 0,
    direction: 'horizontal',
    speed: 300,
    effect: 'slide',
    spaceBetween: 8,
    slidesPerView: 1.5,
    freeMode: true,
    loop: true
  };

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
