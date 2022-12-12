import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UsersService } from "./users.service";

@Component({
  selector: "app-user-info",
  template: `
    <p *ngIf="user">
      {{ user.nome + " " + user.cognome }}
    </p>
    <button (click)="canEdit = true">modifica</button>
    <div *ngIf="canEdit">
      <input type="text" />
      <input type="text" />
    </div>
  `,
  styles: [],
})
export class UserInfoComponent implements OnInit {
  user: any;
  canEdit: boolean = false;
  constructor(private router: ActivatedRoute, private usersSrv: UsersService) {}

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      console.log(params);
      this.user = this.usersSrv.users[params["id"]];
    });
  }

  canDeactivate() {
    if (!this.canEdit) {
      return true
    }
    return confirm('sei sicuro di voler uscire? perderai tuttoooo')
  }
}
