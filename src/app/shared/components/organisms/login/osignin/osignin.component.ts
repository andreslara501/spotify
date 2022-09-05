import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../../environments/environment';

@Component({
  selector: 'app-osignin',
  templateUrl: './osignin.component.html',
  styleUrls: ['./osignin.component.scss']
})
export class OSigninComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public linkAuth(): String {
    return `${environment.URL_ACCOUNT}/authorize?client_id=${environment.CLIENT_ID}&response_type=token&redirect_uri=${environment.URL_REDIRECT}`
  }

}
