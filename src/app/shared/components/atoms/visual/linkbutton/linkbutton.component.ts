import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-linkbutton',
  templateUrl: './linkbutton.component.html',
  styleUrls: ['./linkbutton.component.scss']
})
export class LinkbuttonComponent implements OnInit {
  @Input() href: String = '';

  constructor() { }

  ngOnInit(): void {
  }

}
