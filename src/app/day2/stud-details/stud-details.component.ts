import { Component } from '@angular/core';
import { Stud } from '../../stud.model';
import { CurrencyPipe, DatePipe, NgClass, NgForOf, NgIf, NgStyle, UpperCasePipe } from '@angular/common';
import { ExpoPipe } from '../../day3/expo.pipe';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-stud-details',
  imports: [FormsModule, ExpoPipe, NgForOf,NgIf,NgClass,NgStyle, UpperCasePipe, CurrencyPipe, DatePipe],
  templateUrl: './stud-details.component.html',
  styleUrl: './stud-details.component.css'
})
export class StudDetailsComponent {
  filteredStudents:Stud[]=[];
  constructor(private router: Router){}

  isLoggedIn:boolean=false;

  viewstud(studId:number){
     this.router.navigate(['/stud-view', studId]);
  }
   filterData:string='';
  allStudents:Stud[]=[
    {
     studId:1,
    studName:'Rekha',
    studTotalMarks:250,
    studDOB:new Date(2015,1,2),
    studGender:'Male'
    },
    {
    studId:2,
    studName:'Margret',
    studTotalMarks:450,
    studDOB:new Date(2025,2,2),
    studGender:'Female'
    },
    {
     studId:3,
    studName:'aarthi',
    studTotalMarks:500,
    studDOB:new Date(2025,3,2),
    studGender:'Male'
    },
    {
   studId:4,
    studName:'Shyle',
    studTotalMarks:150,
    studDOB:new Date(2025,2,3),
    studGender:'Male'
    }
  ];
  searchGender(){
  
  const gender = this.filterData.trim().toLowerCase();
    console.log("Gender="+gender);
  this.allStudents = this.filteredStudents.filter(stud =>
    stud.studGender.toLowerCase()==this.filterData.trim().toLowerCase()
  );
//console.log("allstudents="+this.allStudents.length);

     //if((stud.value.length==0)) return stud;
    //return stud.value.filter((eachStudent:any)=>eachStudent.studGender.toLowerCase()==stud.value.studGender.toLowerCase());
  }
}
