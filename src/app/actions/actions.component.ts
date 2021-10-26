import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss'],
})
export class ActionsComponent implements OnInit {
isTrue=true;
  constructor() { }

  ngOnInit() {
    setTimeout(()=>{
      this.isTrue=false;
    },5000);
  }

}
