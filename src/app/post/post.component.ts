import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { PostService } from "../post.service";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"],
})
export class PostComponent implements OnInit {
  post: string;
  myclass: boolean = false;
  italics: boolean = false;
  clears: boolean = false;
  posts: any[] = [];
  constructor(private postServ: PostService) {}

  ngOnInit() {
    this.postServ.save();
  }

  onSubmit(event: NgForm) {
    if (event.form.invalid) {
      return;
    }
    if (this.myclass) {
      this.posts.push({
        title: event.form.value.post,
        bold: true,
      });
    } else if (this.italics) {
      this.posts.push({
        title: event.form.value.post,
        italic: true,
      });
    } else {
      this.posts.push({
        title: event.form.value.post,
      });

      console.log(this.post);
    }
    console.log(this.posts);
    event.form.reset();
  }

  bold() {
    this.myclass = true;
  }
  italic() {
    this.italics = true;
  }
  clear() {
    this.clears = !this.clears;
  }
}
