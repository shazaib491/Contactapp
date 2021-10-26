import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PostService } from "../post.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  login = {
    // eslint-disable-next-line @typescript-eslint/quotes
    email: " ",
    mobile: "",
    password: "",
    cpassword: "",
  };
  constructor(private auth: PostService,private router:Router) {}

  ngOnInit() {}

  registerForm() {
    const data = this.auth.createUser(
      this.login.email,
      this.login.password,
      this.login.mobile,
      this.login.cpassword
    );
    console.log(data);
    this.router.navigate(['/login']);
    // console.log(this.login)
  }
}
