import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
items: any[]=[];
  constructor() { }

  ngOnInit() {
    this.items=JSON.parse(localStorage.getItem("image"));
  }

}
