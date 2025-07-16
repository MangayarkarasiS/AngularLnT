import { Component, inject } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Router } from '@angular/router';
import { Stud } from '../../stud.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-studenthttpadd',
  imports: [FormsModule],
  templateUrl: './studenthttpadd.component.html',
  styleUrl: './studenthttpadd.component.css'
})
export class StudenthttpaddComponent {
  //part of Angular’s dependency injection (DI) system and 
  // is especially useful in newer versions (Angular 14+) 
  // for cleaner, more flexible code.
  studentService=inject(StudentService);
  router=inject(Router);  
   //array created for accepting students data
   allStud:Stud[]=[];
   selectedUserName:string=''; //string for fetching search result from textbox

   constructor() { }
   //this method is for fetching all students data from angular service, data
   //is in form of observable so we need to subscribe it to get here
    loadData(){
  
     this.studentService.getAllStudents().subscribe({
      next:(data)=>{this.allStud=data;console.log(data);},
      error:(err)=>{console.log("error"+err);}
     })
 }
 //called when component is initialized
  ngOnInit(): void {
    this.loadData();
  }
  //add student by collecting information from forms
  addStudent(myForm:any){
    console.log(myForm.value);
    let newStudent:Stud={
      studId:myForm.value.studId,
      studName:myForm.value.studName,
      studDOB:myForm.value.studDob,
      studTotalMarks:myForm.value.studTotalMarks,
      studGender:myForm.value.studGender
    }
    this.studentService.addStudent(newStudent).subscribe({
      next:(response)=>{this.router.navigate(['listStud']);
    console.log(response)},
    error:(err)=>{console.log(err)}
    })
  }
}
