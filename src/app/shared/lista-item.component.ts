import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-lista-item",
  template: `
    <ul class="list-group">
      <ng-content></ng-content>
    </ul>
  `,
  styles: [],
})
export class ListaItemComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
