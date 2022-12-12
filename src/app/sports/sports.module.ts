import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SportsPage } from './sports.page';
import { SharedModule } from '../shared/shared.module';
import { SportsRoutingModule } from './sports-routing.module';



@NgModule({
  declarations: [SportsPage],
  imports: [
    SharedModule,
    SportsRoutingModule
  ]
})
export class SportsModule { }
