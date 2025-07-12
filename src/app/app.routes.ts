import { Routes } from '@angular/router';
import { StudDetailsComponent } from './day2/stud-details/stud-details.component';
import { ProductComponent } from './day2/product/product.component';
import { ArrayExComponent } from './day2/array-ex/array-ex.component';
import { StudviewComponent } from './day3/studview/studview.component';
import { PagenotfoundComponent } from './day3/pagenotfound/pagenotfound.component';
import { TempFormComponent } from './day4/temp-form/temp-form.component';
import { ReactformComponent } from './day4/reactform/reactform.component';
import { GetStudComponent } from './studentcomp/get-stud/get-stud.component';
import { StudenthttpaddComponent } from './studentcomp/studenthttpadd/studenthttpadd.component';
import { StudByNameComponent } from './studentcomp/stud-by-name/stud-by-name.component';
import { authGuard } from './guards/auth.guard';
import { roleGuard } from './guards/role.guard';
import { LoginformComponent } from './studentcomp/loginform/loginform.component';
import { StudHttpEditComponent } from './studentcomp/stud-http-edit/stud-http-edit.component';

export const routes: Routes = [
    {path:'',component:LoginformComponent}, 
    {path:'LoginForm',component:LoginformComponent},
    {path:'listStud',component:GetStudComponent, canActivate: [authGuard, roleGuard], data: { roles: ['User','Admin'] }},
    {path:'stud-list',component:StudDetailsComponent,canActivate: [authGuard, roleGuard], data: { roles: ['Admin'] }},
    {path:'product',component:ProductComponent, canActivate: [authGuard, roleGuard], data: { roles: ['User'] }},
    {path:'stud-view/:sid',component: StudviewComponent, canActivate: [authGuard, roleGuard], data: { roles: ['User'] }},
     
      {path:'RForm',component:ReactformComponent, canActivate: [authGuard, roleGuard], data: { roles: ['User'] }},

        {path:'addStud',component:StudenthttpaddComponent},
       {path:'viewStud/:sid',component:StudviewComponent},
        {path:'editStud/:sid',component:StudHttpEditComponent},
        {path:'listStudName',component:StudByNameComponent},
      
    {path:'**',component:PagenotfoundComponent}

];
