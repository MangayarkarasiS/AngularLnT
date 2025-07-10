import { Injectable } from '@angular/core';
import { UserCredentials } from '../studentcomp/UserCredential.model';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
allStudents:UserCredentials[]=[];
  baseUrl:string="https://localhost:7227/api/UserCredentials";

  
  constructor(private httpClient:HttpClient) { }



  getAllUsers():Observable<UserCredentials[]>{
    return this.httpClient.get<UserCredentials[]>(this.baseUrl);
   }
  authenticateUser(user:UserCredentials){
      return this.httpClient.post<{ token: string }>
      ("https://localhost:7227/api/UserCredentials/authentication/",user).pipe(
    tap(response => {
      const token = response.token;
      localStorage.setItem('jwtToken', token);  
         
    })
  );
    }
}
