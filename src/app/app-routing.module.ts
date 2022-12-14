import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
const routes: Routes = [
  {
    path: "sports",
    loadChildren: () =>
      import("./sports/sports.module").then((m) => m.SportsModule),
  },
  {
    path: "users",
    loadChildren: () =>
      import("./users/users.module").then((m) => m.UsersModule),
  },
  {
    path: "",
    pathMatch: "full",
    loadChildren: () => import("./home/home.module").then((m) => m.HomeModule),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
