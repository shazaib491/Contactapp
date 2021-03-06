import { Injectable } from "@angular/core";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { HttpClient } from "@angular/common/http";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  // eslint-disable-next-line @typescript-eslint/quotes
} from "@angular/fire/compat/firestore";
import { Router } from "@angular/router";
import { Subject } from "rxjs";

export interface AuthData {
  email: string;
  password: string;
  cpassword?: string;
  mobile?: string;
}

@Injectable({
  providedIn: "root",
})
export class PostService {
  public token?: any;
  private authStatusListner = new Subject<boolean>();
  private isAuthenticated = false;
  // isTimer: string;
  private userId?: any;
  // private BACKEND_URL = 'user/';
  constructor(
    private http: HttpClient,
    private firestore: AngularFirestore,
    private router: Router
  ) {}

  getToken() {
    return this.token;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }
  getUserId() {
    return this.userId;
  }
  getAuthStatusListener() {
    return this.authStatusListner.asObservable();
  }

  createUser(
    email: string,
    password: string,
    mobile: string,
    cpassword: string
  ) {
    const authData: AuthData = {
      email,
      mobile,
      password,
      cpassword,
    };
    if (password !== cpassword) {
      return this.authStatusListner.next(false);
    }
    const id = Math.floor(Math.random() * 100);
    localStorage.setItem("email", email);
    localStorage.setItem("mobile", mobile);
    localStorage.setItem("password", password);
    localStorage.setItem("userId", " " + id + " ");
    return authData;
    // this.http
    //   .post(environment.apiUrl + this.BACKEND_URL + 'singup', authData)
    //   .subscribe(
    //     (response) => {
    //       this.router.navigate(['/']);
    //     },
    //     (error) => {
    //       this.authStatusListner.next(false);
    //     }
    //   );
  }

  login(email: string, password: string) {
    const authData: any = {
      email,
      password,
    };
    const emails = localStorage.getItem("email");
    const passwords = localStorage.getItem("password");

    if (emails == email && passwords == password) {
      this.isAuthenticated = true;
      this.userId = localStorage.getItem("userId");
      this.authStatusListner.next(true);
      this.token = "12345";
      this.saveAuthData(this.token, this.userId);
      return authData;
    } else {
      return false;
    }

    // this.http
    //   .post<{ token: string; expiresIn: number; userid: string }>(
    //     environment.apiUrl + this.BACKEND_URL + 'login',
    //     authData
    //   )
    //   .subscribe(
    //     (response) => {
    //       this.token = response.token;
    //       if (this.token) {
    //         this.isAuthenticated = true;
    //         this.userId = response.userid;
    //         this.authStatusListner.next(true);
    //         const now = new Date();
    //         const expirationDate = new Date(
    //           now.getTime() + response.expiresIn * 1000
    //         );
    //         this.setAuthTimer(response.expiresIn);
    //         this.router.navigate(['/']);
    //       }
    //     },
    //     (error) => {
    //       this.authStatusListner.next(false);
    //     }
    //   );
  }
  autoAuthUser() {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    }
    const now = new Date();
    // const expiresIn = authInformation!.expiresDate.getTime() - now.getTime();
    // if (expiresIn > 0) {
    this.token = authInformation?.token;
    this.isAuthenticated = true;
    this.userId = authInformation.userId;
    // this.setAuthTimer(expiresIn / 1000);
    this.authStatusListner.next(true);
    // }
  }

  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListner.next(false);
    this.router.navigate(["/"]);
    this.userId = null;
    this.clearAuthData();

    // clearTimeout(this.isTimer);
  }

  setAuthTimer(duration: number) {
    console.log("Seting Timer :", +duration);
    // this.isTimer = setTimeout(() => {
    //   this.logout();
    // }, duration * 1000);
  }

  private saveAuthData(token: string, userId: string) {
    localStorage.setItem("token", token);
    // let dt = new Date().toISOString();
    // localStorage.setItem('expiration', dt);
    localStorage.setItem("userId", userId);
  }

  private clearAuthData() {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    localStorage.removeItem("userId");
  }

  private getAuthData() {
    const token = localStorage.getItem("token");
    // const expiresDate = localStorage.getItem('expiration');
    const userId = localStorage.getItem("userId");
    if (!token) {
      return;
    }
    return {
      token,
      // expiresDate: new Date(expiresDate || ''),
      userId,
    };
  }

  // save() {
  //   this.firestore
  //     .collection("contactapp-cae9d-default-rtdb")
  //     .add({ title: "admin" })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }
}
