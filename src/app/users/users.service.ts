import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class UsersService {
  users: any = [
    {
      nome: "marco",
      cognome: "rossi",
    },
    {
      nome: "Luca",
      cognome: "rossi",
    },
  ];
  constructor() { }
}
