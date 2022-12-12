import { Injectable } from '@angular/core';

@Injectable()
export class ProvaService {
testo = 'usersmodule'
  constructor() { }

  getTesto(){
    return this.testo
  }
}
