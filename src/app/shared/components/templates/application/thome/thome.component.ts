import { Component, Input, OnInit } from '@angular/core';
import { ICardSection } from 'src/app/shared/interfaces/card';

@Component({
  selector: 'app-thome',
  templateUrl: './thome.component.html',
  styleUrls: ['./thome.component.scss']
})
export class ThomeComponent implements OnInit {

  @Input() sections: Array<ICardSection> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
