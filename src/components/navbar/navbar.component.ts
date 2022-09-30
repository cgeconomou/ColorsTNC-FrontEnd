import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isCollapsed:boolean = true;
  welcomeMessageIsVible:boolean = false;
  
  constructor(private router: Router, public userService: UserService) { }



  toggleCollapse(){
    this.isCollapsed = !this.isCollapsed;
  }

  Logout() {
    console.log(localStorage.getItem('userToken'));
    localStorage.removeItem('userToken');
    localStorage.removeItem('userRoles');
    localStorage.removeItem('userName');
    this.welcomeMessageIsVible= false;
    alert("Successfully Logged Out");
  }
 showLogout(){
  if(localStorage.getItem('userToken')==null)
    return false;
  this.welcomeMessageIsVible =true;

  return true;
 }
 welcomeMessage(){
  return localStorage.getItem('userName');
 }
 
ngOnInit(): void {
  }

}
