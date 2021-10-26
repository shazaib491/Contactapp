import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PostService } from "../post.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  isauths = false;
  constructor(private auth: PostService,private router:Router) {}

  ngOnInit() {
    this.auth.getAuthStatusListener().subscribe(
      (res) => {
        this.isauths = res;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  logout() {
    this.auth.logout();
  }
}
