import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  login = {
    // eslint-disable-next-line @typescript-eslint/quotes
    email:" ",
    mobile:'',
    password:'',
    cpassword:''
  };
  constructor() { }

  ngOnInit() {}

  registerForm() {
    console.log(this.login)
  }

}
