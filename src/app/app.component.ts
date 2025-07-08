import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmpDetailsComponent } from './Employee/emp-details/emp-details.component';
import { FormsModule } from '@angular/forms';
import { CounterComponent } from './Employee/counter/counter.component';
import { LoginComponent } from './day2/login/login.component';
import { ArrayExComponent } from './day2/array-ex/array-ex.component';
import { StudDetailsComponent } from './day2/stud-details/stud-details.component';
import { HighlighttextDirective } from './day3/highlighttext.directive';
import { HeaderComponent } from './day3/header/header.component';
//import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  imports: [HeaderComponent, HighlighttextDirective, StudDetailsComponent, ArrayExComponent, LoginComponent, RouterOutlet,EmpDetailsComponent,FormsModule,CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myProject';
  empname:string='Construction';

   
}
