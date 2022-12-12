import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item.component';
import { ListaItemComponent } from './lista-item.component';
import { LogService } from '../log.service';



@NgModule({
  declarations: [
    ItemComponent,
    ListaItemComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[LogService],
  exports:[ItemComponent,ListaItemComponent, CommonModule]
})
export class SharedModule { }
