import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProvaService } from "./prova.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { TestInterceptor } from "./test.interceptor";
import { LogService } from "../log.service";

@NgModule({
  providers: [
    ProvaService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TestInterceptor,
      multi: true,
    },
    // LogService
  ],
})
export class CoreModule {}
