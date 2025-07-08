import { Component } from '@angular/core';
import { Stud } from '../../stud.model';

@Component({
  selector: 'app-studentviewhttp',
  imports: [],
  templateUrl: './studentviewhttp.component.html',
  styleUrl: './studentviewhttp.component.css'
})
export class StudentviewhttpComponent {
   fetchedStudent:Stud={
    studId:0,
    studName:'',
    studTotalMarks:0,
    studDOB: new Date(),
    studGender:''
  }
  constructor(private activatedRoute:ActivatedRoute,
              private studentService:StudentService,
              private router:Router   ) { }

  ngOnInit(): void {
    //1. fetch the studid from routing path
   let studId= this.activatedRoute.snapshot.paramMap.get('sid');
   //with this extracted studid you have to go to service and 
   //subscribe to the service to  get student data
   if(studId!=null){
     this.studentService.getAStudent(+studId).subscribe({
      next:(response)=>{this.fetchedStudent=response},
      error:(err)=>{console.log(err)}
     })
    }
    //diplay the extracted data in html

  }
  back(){
    this.router.navigate(['student-list-http']);
  }

}
