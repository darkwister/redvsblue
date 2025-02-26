import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-moments',
  templateUrl: './moments.component.html',
  styleUrls: ['./moments.component.scss'],
  imports: [ CommonModule ],
  standalone: true
})
export class MomentsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
