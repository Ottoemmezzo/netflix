import { Injectable } from '@angular/core';

@Injectable()
export class ProvaService {
testo = 'rootmodule'
  constructor() { }

  getTesto(){
    return this.testo
  }
}
