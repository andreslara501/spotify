import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taside',
  templateUrl: './taside.component.html',
  styleUrls: ['./taside.component.scss']
})
export class TasideComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public showSearch(): void {
    alert('holaaas')
  }

}
