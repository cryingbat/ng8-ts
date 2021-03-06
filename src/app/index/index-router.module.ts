import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IndexComponent } from "./index.component";
import { HomeComponent } from "./home";
import {
  ManagerComponent,
  UserManagerComponent,
  LogManagerComponent,
} from "./manager";
import { SystemComponent, UserComponent, LiveValidComponent } from "./system";
import { PagenotfoundComponent } from "../pagenotfound";
import { ValidComponent } from './system/component/valid';

const routes: Routes = [
  {
    path: "index",
    component: IndexComponent,
    children: [
      { path: "", redirectTo: "home", pathMatch: "full" },
      {
        path: "home",
        component: HomeComponent,
      },
      {
        path: "manager",
        component: ManagerComponent,
        children: [
          { path: "", redirectTo: "user", pathMatch: "full" },
          {
            path: "user",
            component: UserManagerComponent,
          },
          {
            path: "log",
            component: LogManagerComponent,
          },
        ],
      },
      {
        path: "system",
        component: SystemComponent,
        children: [
          { path: "", redirectTo: "userinfo", pathMatch: "full" },
          {
            path: "userinfo",
            component: UserComponent,
          },
          {
            path: "valid",
            component: ValidComponent,
          },
          {
            path: "livevalid",
            component: LiveValidComponent,
          },
        ],
      },
    ],
  },
  {
    path: "pageError",
    component: PagenotfoundComponent,
  },
  {
    path: "**",
    redirectTo: "pageError",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexRouterModule {}
