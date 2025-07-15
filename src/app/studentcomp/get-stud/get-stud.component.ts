import { Component, inject } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Stud } from '../../stud.model';
//import { HttpClient } from '@angular/common/http';
import { NgForOf } from '@angular/common';
import { DatePipe, CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-get-stud',
  imports: [NgForOf,CommonModule, FormsModule],
  templateUrl: './get-stud.component.html',
  styleUrl: './get-stud.component.css'
})
export class GetStudComponent{
   studentService=inject(StudentService);
   router=inject(Router);
  filteredStudents: Stud[]=[];
   constructor(){
     console.log("into constructor");
   }
   
   allStud:Stud[]=[];
   searchname:string='';
   ngOnInit(){
    
    this.loadData();
   }
 loadData(){
  
     this.studentService.getAllStudents().subscribe({
      next:(data)=>{this.filteredStudents=data; this.allStud=data;console.log(data);},
      error:(err)=>{console.log("error"+err);}
     })
 }
 searchGender(){
  console.log('Search input:'+ this.searchname);

  this.filteredStudents = this.allStud.filter(stud =>
    stud.studGender.toLowerCase()==this.searchname.trim().toLowerCase()
  );
 }
 searchName(){
   this.filteredStudents = this.allStud.filter(stud =>
    stud.studName.toLowerCase()==this.searchname.trim().toLowerCase()
  );
 }
 addStudent(){
  this.router.navigate(['addStud']);
 }
 viewStudent(studid: number){
   this.router.navigate(['viewStud',studid]);
 }
 editStudent(studId:number){
  this.router.navigate(['editStud',studId]);
 } 
 deleteStudent(studId:number){

  const confirmed = window.confirm('Are you sure you want to delete this student?');
  if (confirmed) {
    this.studentService.deleteStudent(studId).subscribe({
      next: () => {
        alert('Student deleted successfully.');
        this.router.navigate(['/listStud']).then(() => {
    this.loadData(); // Custom method to refresh data; 
      })
    },
      error: err => {
        console.error('Delete failed:', err);
        alert('Failed to delete student.');
      }
    });
  }
}

 
}
