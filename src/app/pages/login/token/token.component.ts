import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SigninService } from 'src/app/shared/services/auth/signin/signin.service';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.scss']
})
export class TokenComponent implements OnInit {

  constructor(
    private router: ActivatedRoute,
    private router2: Router,
    private SigninService: SigninService
  ){ }

  async ngOnInit(): Promise<void>{
    const [,query] = document.URL.split('#') || [];
    const params2 = new URLSearchParams(query)
    localStorage.setItem('spfToken', params2.get('access_token') || '');

    await this.SigninService.getUsers();
    setTimeout(() => { this.router2.navigate(['/', 'home']) }, 1000)
  }

}
