import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Stud } from '../stud.model';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
 authService=inject(AuthService);
 allStudents:Stud[]=[];
 baseUrl:string="https://localhost:7227/api/Studs";
 constructor(private httpClient:HttpClient) { }
 
  getAllStudents():Observable<Stud[]>{
    return this.httpClient.get<Stud[]>(this.baseUrl);
    }
   
  addStudent(stud:Stud):Observable<Stud>{
    return this.httpClient.post<Stud>(this.baseUrl,stud);
  }

  getAStudent(studId:number):Observable<Stud>{
    return this.httpClient.get<Stud>(this.baseUrl+'/'+studId);
  } 
 
  editStudent(stud:Stud):Observable<Stud>{
    return this.httpClient.put<Stud>(this.baseUrl+'/'+stud.studId,stud);
  }
  deleteStudent(studId:number):Observable<void>{
    return this.httpClient.delete<void>(this.baseUrl+'/'+studId);
  }
}


 /* getStudentMarks(mark:number):Observable<Stud[]>{
      return this.httpClient.get<Stud[]>("https://localhost:7227/api/Studs/GetMarks/"+mark,{headers:this.newHeader});
  }

 //public async Task<ActionResult<IEnumerable<Stud>>> GetStudByName()
  GetStudByName():Observable<Stud[]>{
    return this.httpClient.get<Stud[]>("https://localhost:7227/api/Studs/Getname");
  }*/