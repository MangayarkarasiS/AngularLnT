import { Component } from '@angular/core';
import { Stud } from '../../stud.model';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-stud-http-edit',
  imports: [ReactiveFormsModule],
  templateUrl: './stud-http-edit.component.html',
  styleUrl: './stud-http-edit.component.css'
})
export class StudHttpEditComponent {
 fetchedStudent :Stud={
    studId:0,
    studName:'',
    studTotalMarks:0,
    studDOB:new Date(),
    studGender:''
    }
  myReactiveForm:FormGroup=new FormGroup({
    rsId:new FormControl(),
    rsName:new FormControl('',[Validators.required]),
    rsMarks:new FormControl('',Validators.required),
    rsDob:new FormControl('',Validators.required),
    rsGender:new FormControl('',Validators.required)
  });
  constructor(private studentService:StudentService,
              private activatedRoute:ActivatedRoute,
              private router:Router   ) { }
  ngOnInit():void{
    //this.myReactiveForm.valueChanges.subscribe(res=>{console.log(res)});
    //this.myReactiveForm.statusChanges.subscribe(res=>{console.log(res)});
    let studId=this.activatedRoute.snapshot.paramMap.get('sid');
    if(studId!=null)
    this.studentService.getAStudent(+studId).subscribe({
      next:(response)=>{
        this.fetchedStudent=response;
        console.log(this.fetchedStudent.studGender);
        this.myReactiveForm.setValue({
          rsId:this.fetchedStudent.studId,
          rsName:this.fetchedStudent.studName,
          rsDob:this.fetchedStudent.studDOB,
          rsMarks:this.fetchedStudent.studTotalMarks,
          rsGender:this.fetchedStudent.studGender
        })
      },
      error:(err)=>console.log(err)
 })  
}
  editStudent(){
    console.log(this.myReactiveForm);
    let updatStudent:Stud={
     studId:this.myReactiveForm.value.rsId,
     studName:this.myReactiveForm.value.rsName,
     studTotalMarks:this.myReactiveForm.value.rsMarks,
     studDOB:this.myReactiveForm.value.rsDob,
     studGender:this.myReactiveForm.value.rsGender
   }
 //send this student object to backend through the service to get added to databse
   this.studentService.editStudent(updatStudent).subscribe({
     next:(response)=>{this.router.navigate(['listStud']),console.log(response)},
     error:(err)=>{console.log(err)}
     
   })
  }

  back(){
    this.router.navigate(['listStud']);
  }

 
}
