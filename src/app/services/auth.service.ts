import { Injectable } from '@angular/core';
import { UserCredentials } from '../studentcomp/UserCredential.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   private loggedIn = false;
  private userRole: string | null = null;

    storeToken(user:UserCredentials):void{
    sessionStorage.setItem("userInfo",JSON.stringify(user))
  }

  removeToken(){
    sessionStorage.removeItem("userInfo");
  }

  fetchToken(){
    let userInfoString= sessionStorage.getItem("userInfo");
    let userInfo;
    if(userInfoString!=null)
    {
      userInfo=JSON.parse(userInfoString);
    }
    return userInfo;
  }
  login(role: string) {
    console.log("Role in authservice="+role);
    this.loggedIn = true;
    this.userRole = role;
  }

  logout() {
    this.loggedIn = false;
    this.userRole = null;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  getRole(): string | null {
    return this.userRole;
  }
  
}
