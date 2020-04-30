import { AuthGuard } from './auth-guard.service';
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./users/user/user.component";
import { ServersComponent } from "./servers/servers.component";
import { ServerComponent } from "./servers/server/server.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { NgModule } from "@angular/core";

export const appRoutes: Routes = [
    { path: '', component: HomeComponent }, // localhost:4200/
  
    { path: 'users', component: UsersComponent, children: [ // localhost:4200/users
      { path: ':id/:name', component: UserComponent }, // localhost:4200/users/:id
    ] }, 
    
    {
      path: 'servers', // localhost:4200/servers
      // canActivate: [AuthGuard],
      canActivateChild: [AuthGuard],
      component: ServersComponent,
      children: [ 
        { path: ':id', component: ServerComponent }, // localhost:4200/servers/:id
        { path: ':id/edit', component: EditServerComponent }, // localhost:4200/:id/edit
      ]
    },
  
    { path: 'not-found', component: PageNotFoundComponent },
    { path: '**', redirectTo: '/not-found'}
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}