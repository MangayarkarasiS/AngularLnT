import { Routes } from '@angular/router';
import { StudDetailsComponent } from './day2/stud-details/stud-details.component';
import { ProductComponent } from './day2/product/product.component';
import { ArrayExComponent } from './day2/array-ex/array-ex.component';
import { StudviewComponent } from './day3/studview/studview.component';
import { PagenotfoundComponent } from './day3/pagenotfound/pagenotfound.component';

export const routes: Routes = [
    {path:'',component:ArrayExComponent}, 
    {path:'stud-list',component:StudDetailsComponent},
    {path:'product',component:ProductComponent},
    {path:'stud-view/:sid',component: StudviewComponent},
    {path:'**',component:PagenotfoundComponent}

];
