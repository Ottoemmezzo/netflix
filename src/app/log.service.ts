import { Injectable } from "@angular/core";

// @Injectable({
//   providedIn: "root",
// })
@Injectable()
export class LogService {
  private ultimolog: string | undefined;
  constructor() {}

  printLog(messaggio: string) {
    console.log(messaggio);
    console.log("ultimo log: ", this.ultimolog);
    this.ultimolog = messaggio;
  }
}
