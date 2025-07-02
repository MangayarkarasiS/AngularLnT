import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stud } from '../../stud.model';

@Component({
  selector: 'app-studview',
  imports: [],
  templateUrl: './studview.component.html',
  styleUrl: './studview.component.css'
})
export class StudviewComponent {
fetchedStudent :Stud={
    studId:0,
    studName:'',
    studTotalMarks:0,
    studDOB:new Date(),
    studGender:''
    }

constructor(private activatedRoute:ActivatedRoute, 
                            private router:Router) { }

 ngOnInit(): void {
    let studId=this.activatedRoute.snapshot.paramMap.get('sid');
    if(studId!=null)
    {
      // Fetch the student details based on studId
      // For now, we will use a static object
      this.fetchedStudent={
        studId: parseInt(studId),
        studName: 'Sample View Student',
        studTotalMarks: 450,
        studDOB: new Date(2000, 1, 1),
        studGender:'Male'}
      }
    }

 back(){
    this.router.navigate(['stud-list']);
  }
}
