import { Component, OnInit } from "@angular/core";
import { LogService } from "../log.service";
import { SportsService } from "./sports.service";

@Component({
  template: `
    <div class="container">
    <app-lista-item>
      <app-item
        class="mb-3"
        *ngFor="let sport of sports$ | async"
        [titolo]="sport.nome"
      ></app-item>
    </app-lista-item> 
     </div>
  `,
  styles: [],
})
export class SportsPage implements OnInit {
  sports$: any =  this.sportsSrv.getAll()
  constructor(private logSrv:LogService, private sportsSrv:SportsService) {}

  ngOnInit(): void {

    // this.logSrv.printLog('chiamo da sports page')

  }
}
