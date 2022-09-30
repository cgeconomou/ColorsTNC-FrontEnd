import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUserName!:string;
  readonly rootUrl = 'https://localhost:44321';
  // httpOptions = {
  //   headers: new HttpHeaders({'content-Type':'application/json'})
  // }

  constructor(private http:HttpClient) { }

  registerUser(user: User, newUserRoles:string[]):Observable<User> {
    const body = {
      UserName: user.UserName,
      Password: user.Password,
      Email: user.Email,
      FirstName: user.FirstName,
      LastName: user.LastName,
      Roles: newUserRoles
    }
    console.log(user);
    var reqHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.post<User>(this.rootUrl+'/api/User/Register',body,{headers : reqHeader});
  }

  userAuthentication(userName:string, password:string) {
    var data = "username=" + userName + "&password=" + password + "&grant_type=password";
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' });
    return this.http.post(this.rootUrl + '/token', data, { headers: reqHeader });
  }

  getUserClaims(){
   return  this.http.get(this.rootUrl+'/api/GetUserClaims',
   {headers:new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('userToken')})}
   );
  }

  getAllRoles() {
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.get(this.rootUrl + '/api/GetAllRoles');
  }

  roleMatch(allowedRoles:string[]): boolean {
    var isMatch = false;
    var userRoles:string[]=JSON.parse(localStorage.getItem('userRoles')|| 'null');
    allowedRoles.forEach((element:string) => {
      if(userRoles == null){
        return;
      }
      if (userRoles.indexOf(element) > -1) {
        isMatch = true;
        return;
      }
    });
   // console.log("testing the return value of method roleMatch", isMatch);
    return isMatch;
  }

}
