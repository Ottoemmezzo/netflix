import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersPage } from './users.page';
import { UserInfoComponent } from './user-info.component';
import { AuthGuard } from '../auth/auth.guard';
import { DeactivateGuard } from '../deactivate.guard';

const routes: Routes = [
  {
    path: "",
    component: UsersPage,
    // canActivate:[AuthGuard],
    // canActivateChild:[AuthGuard],
    children:[
      {
        path:':id',
        component:UserInfoComponent,
        canDeactivate:[DeactivateGuard]
      }
    ]
  }
 
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class UsersRoutingModule { }
