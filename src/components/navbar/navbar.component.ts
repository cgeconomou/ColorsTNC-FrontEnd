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
  constructor(private router: Router, public userService: UserService) { }



  toggleCollapse(){
    this.isCollapsed = !this.isCollapsed;
  }

  Logout() {
    console.log(localStorage.getItem('userToken'));
    localStorage.removeItem('userToken');
    localStorage.removeItem('userRoles');
    alert("Successfully Logged Out");

  }

  ngOnInit(): void {
  }

}
