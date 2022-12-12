import { Component, OnInit } from "@angular/core";
import { AuthService } from "./auth/auth.service";

@Component({
  selector: "app-nav",
  template: `
    <nav class="navbar navbar-expand mb-3 navbar-light bg-light">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link"
                [routerLink]="['/']"
                routerLinkActive="active"
                [routerLinkActiveOptions]="{ exact: true }"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                [routerLink]="['/users']"
                routerLinkActive="active"
                >Users</a
              >
            </li>
            <li class="nav-item"  *ngIf="isLoggedIn">
              <a
                class="nav-link "
                [routerLink]="['/sports']"
                routerLinkActive="active"
                >Sports</a
              >
            </li>
            <li class="nav-item" *ngIf="!isLoggedIn">
              <a
                class="nav-link "
                [routerLink]="['/login']"
                routerLinkActive="active"
                >Login</a
              >
            </li>
            <li class="nav-item" *ngIf="!isLoggedIn">
              <a
                class="nav-link "
                [routerLink]="['/signup']"
                routerLinkActive="active"
                >Signup</a
              >
            </li>
          </ul>

          <button class="btn btn-danger" (click)="onLogout()" *ngIf="isLoggedIn" >Logout</button>
          <!-- <button class="btn btn-success" (click)="onLogin()">login</button>
          <button class="btn btn-danger m-3" (click)="onLogout()">
            logout
          </button> -->
        </div>
      </div>
    </nav>
  `,
  styles: [],
})
export class NavComponent implements OnInit {
  isLoggedIn: boolean = false;
  constructor(private authSrv: AuthService) {}

  ngOnInit(): void {
    this.authSrv.isLoggedIn$.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn
    });
  }

  // onLogin() {
  //   this.authSrv.login();
  // }

  onLogout() {
    this.authSrv.logout();
  }
}
