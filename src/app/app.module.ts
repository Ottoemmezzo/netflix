import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { CoreModule } from "./core/core.module";
import { LogService } from "./log.service";
import { SharedModule } from "./shared/shared.module";
import { AuthModule } from './auth/auth.module';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    AuthModule
  ],
  // providers:[
  //   LogService
  // ],
  bootstrap: [AppComponent],
})
export class AppModule {}
