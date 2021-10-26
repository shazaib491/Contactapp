import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../post.service';

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
  constructor(private auth:PostService,private router:Router) { }

  ngOnInit() {}
message:string;
  logForm() {
    // this.auth.createUser(this.login.email,this.login.password);
    const data=this.auth.login(this.login.email,this.login.password);
    console.log(data)
    if(data==false){
      this.message="Wrong Credentials"
    }else{
      this.router.navigate(['/dashboard']);
    }

  }

}
