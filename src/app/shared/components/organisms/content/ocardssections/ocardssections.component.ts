import { Component, OnInit, Input } from '@angular/core';
import { ICardSection } from 'src/app/shared/interfaces/card';

@Component({
  selector: 'app-ocardssections',
  templateUrl: './ocardssections.component.html',
  styleUrls: ['./ocardssections.component.scss']
})
export class OcardssectionsComponent implements OnInit {

  @Input() sections: Array<ICardSection> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
