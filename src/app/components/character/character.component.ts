import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
  imports: [CommonModule],
  standalone: true
})
export class CharacterComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
