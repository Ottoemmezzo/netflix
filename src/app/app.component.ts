import { Component } from "@angular/core";
import { AuthService } from "./auth/auth.service";
import { ProvaService } from "./core/prova.service";
import { LogService } from "./log.service";
import { UsersService } from "./users/users.service";

@Component({
  selector: "app-root",
  template: `
    <div style="text-align:center" class="content">
      <app-nav></app-nav>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  title = "epicode-lezioni";
  constructor(
    private provaSrv: ProvaService,
    private usersSrv: UsersService,
    private logSrv: LogService,
    private authSrv: AuthService
  ) {}
  ngOnInit(): void {
    // this.authSrv.restoreUser();
    // console.log(this.provaSrv.getTesto(), "da app component");
    // console.log(this.usersSrv.users, "da app component");
    // this.logSrv.printLog("chiamo dal app.component");
  }
}
