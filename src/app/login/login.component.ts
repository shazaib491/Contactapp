import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  login = {
    // eslint-disable-next-line @typescript-eslint/quotes
    email:" ",
    password:''
  };
  constructor() { }

  ngOnInit() {}

  logForm() {
    console.log(this.login)
  }

}
