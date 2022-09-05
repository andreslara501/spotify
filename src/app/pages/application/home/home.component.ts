import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from 'src/animations/fadeIn';
import { ICardSection } from 'src/app/shared/interfaces/card';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class HomeComponent implements OnInit {

  public cardsDePrueba: Array<ICardSection> = [
    {
      title: 'Título de la sección',
      seeMore: 'http://google.com',
      cards: [
        {
          title: 'Holi',
          subtitle: 'Holi 2',
          image: 'https://picsum.photos/200'
        },
        {
          title: 'Chai',
          subtitle: 'Chai 2',
          image: 'https://picsum.photos/200'
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
