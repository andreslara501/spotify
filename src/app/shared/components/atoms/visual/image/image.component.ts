import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  @Input() src: String = '';
  @Input() alt: String = '';
  @Input() animation: String = '';
  @Input() width: String = '';
  @Input() height: String = '';

  constructor() { }

  ngOnInit(): void {
  }

  public animationAssigned(): String {
    return `animation--${this.animation}`
  }

}
