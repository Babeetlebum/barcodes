import { Routes } from "@angular/router";

import { HomeComponent } from "./shared/index";

export const routes: Routes = [
  {
    component: HomeComponent,
    path: "home"
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  },
  {
    path: "**",
    redirectTo: "home"
  }
];
