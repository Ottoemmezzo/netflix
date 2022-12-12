import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  template: `
          <li class="list-group-item">{{ titolo }}</li>
  `,
  styles: [
  ]
})
export class ItemComponent implements OnInit {
@Input() titolo!:string
  constructor() { }

  ngOnInit(): void {
  }

}
