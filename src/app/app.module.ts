import { NgModule } from "@angular/core";
import { FormGroup, FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import {
  BatteryStatus,
  BatteryStatusOriginal,
} from "@ionic-native/battery-status";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { PostComponent } from "./post/post.component";
import { RegisterComponent } from "./register/register.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { HttpClientModule } from "@angular/common/http";
import { PostService } from "./post.service";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireDatabaseModule } from "@angular/fire/compat/database";
import { environment } from "src/environments/environment";
import { ActionsComponent } from "./actions/actions.component";
// import { AngularFireModule } from '@angular/fire';
import { Camera } from '@ionic-native/camera/ngx';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PostComponent,
    DashboardComponent,
    HeaderComponent,
    RegisterComponent,
    ActionsComponent,
    GalleryComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule

  ],
  providers: [
    PostService,
    Camera,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
