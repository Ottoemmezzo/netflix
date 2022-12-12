import { Component, OnInit } from "@angular/core";
import { LogService } from "../log.service";
import { ProvaService } from "./prova.service";
import { UsersService } from "./users.service";

@Component({
  template: `
    <div class="container">
      <app-lista-item>
        <app-item
          class="mb-3"
          [routerLink]="[i]" routerLinkActive="router-link-active" 
          *ngFor="let user of users;let i = index"
          [titolo]="user.nome + ' ' + user.cognome"
        ></app-item>
      </app-lista-item>
      <hr>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [],
})
export class UsersPage implements OnInit {
  users: any;

  constructor(private usersSrv: UsersService, private logSrv:LogService) {}

  ngOnInit(): void {
    this.users = this.usersSrv.users;
// this.logSrv.printLog('chiamo da users page')
  }
}
