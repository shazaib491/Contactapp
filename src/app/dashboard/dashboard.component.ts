import { Component, OnInit } from '@angular/core';
import { BatteryStatus } from '@ionic-native/battery-status/ngx';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  batterySubscription: any;

  // constructor(private batteryStatus: BatteryStatus ) {}
  ngOnInit() {}

  // checkBattery() {
  //   // watch change in battery status
  //   this.batterySubscription = this.batteryStatus
  //     .onChange()
  //     .subscribe((status) => {
  //       console.log(status.level, status.isPlugged);
  //     });
  // }

  // stopBatteryCheck() {
  //   this.batterySubscription.unsubscribe();
  // }
}
