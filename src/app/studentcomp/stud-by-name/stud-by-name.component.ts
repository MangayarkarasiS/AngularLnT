import { Component, inject } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Stud } from '../../stud.model';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-stud-by-name',
  imports: [NgForOf,FormsModule],
  templateUrl: './stud-by-name.component.html',
  styleUrl: './stud-by-name.component.css'
})
export class StudByNameComponent {
  studService=inject(StudentService);
  
  allstud:Stud[]=[];
  ngOnInit(){
    this.studService.GetStudByName().subscribe({
      next:(response)=>{this.allstud=response;},
      error:(err)=>console.log(err)
    })
  }
}
