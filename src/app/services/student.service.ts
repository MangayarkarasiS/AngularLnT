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
 newHeader: HttpHeaders=new HttpHeaders().set('Authorization','Bearer'+this.authService.fetchToken().token); 
  
  



  getAllStudents():Observable<Stud[]>{
    return this.httpClient.get<Stud[]>(this.baseUrl,{headers:this.newHeader});
   }
   
    addStudent(stud:Stud):Observable<Stud>{
    return this.httpClient.post<Stud>(this.baseUrl,stud,{headers:this.newHeader});
  }

  getStudentMarks(mark:number):Observable<Stud[]>{
      return this.httpClient.get<Stud[]>("https://localhost:7227/api/Studs/GetMarks/"+mark,{headers:this.newHeader});
  }

 //public async Task<ActionResult<IEnumerable<Stud>>> GetStudByName()
  GetStudByName():Observable<Stud[]>{
    return this.httpClient.get<Stud[]>("https://localhost:7227/api/Studs/Getname");
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
