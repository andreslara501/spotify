import { Component, OnInit, Input } from '@angular/core';
import { ICard } from 'src/app/shared/interfaces/card';

@Component({
  selector: 'app-ocards',
  templateUrl: './ocards.component.html',
  styleUrls: ['./ocards.component.scss']
})
export class OcardsComponent implements OnInit {

  @Input() cards: Array<ICard> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
