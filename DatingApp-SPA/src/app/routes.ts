import { Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages/messages.component';
import { ListsComponent } from './lists/lists/lists.component';
import { MemberListComponent } from './member-list/member-list/member-list.component';
import { AuthGuard } from "./_guards/auth.guard";

export const  appRoutes:Routes = [
    {path:'',component:HomeComponent}, //Home if only http://localhost:4200/ is pasted in browser & user is not logged in
    {
        path:'',
        runGuardsAndResolvers:"always",
        canActivate:[AuthGuard],
        children:[ // to all children we specify AuthGuard
            {path:'members',component:MemberListComponent },
            {path:'messages',component:MessagesComponent},
            {path:'lists',component:ListsComponent},
        ]
    },
   
    {path:'**',redirectTo:'',pathMatch:'full'}, //annonymous user to home
]; 