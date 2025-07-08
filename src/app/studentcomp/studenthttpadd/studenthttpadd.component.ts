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
  studentService=inject(StudentService);
  router=inject(Router);
  
   constructor() { }

  ngOnInit(): void {
  }
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
