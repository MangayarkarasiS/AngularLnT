import { Component, inject } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Stud } from '../../stud.model';
//import { HttpClient } from '@angular/common/http';
import { NgForOf } from '@angular/common';
import { DatePipe, CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-stud',
  imports: [NgForOf,CommonModule],
  templateUrl: './get-stud.component.html',
  styleUrl: './get-stud.component.css'
})
export class GetStudComponent{
   studentService=inject(StudentService);
   router=inject(Router);
   constructor(){
     console.log("into constructor");
   }
   
   allStud:Stud[]=[];

   ngOnInit(){
    
    this.loadData();
   }
 loadData(){
  
     this.studentService.getAllStudents().subscribe({
      next:(data)=>{this.allStud=data;console.log(data);},
      error:(err)=>{console.log("error"+err);}
     })
 }
 addStudent(){
  this.router.navigate(['addStud']);
 }
}
