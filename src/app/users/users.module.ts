import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { UsersPage } from "./users.page";
import { ProvaModule } from "../prova/prova.module";
import { ProvaService } from "./prova.service";
import { UsersService } from "./users.service";
import { UserInfoComponent } from "./user-info.component";
import { UsersRoutingModule } from "./users-routing.module";
import { SharedModule } from "../shared/shared.module";
import { LogService } from "../log.service";

@NgModule({
  declarations: [UsersPage, UserInfoComponent],
  imports: [RouterModule, ProvaModule, UsersRoutingModule, SharedModule],
  providers: [ProvaService, UsersService],
})
export class UsersModule {}
