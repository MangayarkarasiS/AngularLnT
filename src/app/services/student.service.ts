import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stud } from '../stud.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  allStudents:Stud[]=[];
  baseUrl:string="https://localhost:7227/api/Studs";

  
  constructor(private httpClient:HttpClient) { }



  getAllStudents():Observable<Stud[]>{
    return this.httpClient.get<Stud[]>(this.baseUrl);
   }
   
    addStudent(stud:Stud):Observable<Stud>{
    return this.httpClient.post<Stud>(this.baseUrl,stud);
  }
 /* getAStudent(studId:number):Observable<student>{
    return this.httpClient.get<student>(this.baseUrl+'/'+studId,{headers:this.newHeader});//http://localhost:3000/student/101
  } 
 
  editStudent(stud:student):Observable<student>{
    return this.httpClient.put<student>(this.baseUrl+'/'+stud.id,stud,{headers:this.newHeader});
  }
  deleteStudent(studId:number):Observable<void>{
    return this.httpClient.delete<void>(this.baseUrl+'/'+studId,{headers:this.newHeader});
  }*/
}
