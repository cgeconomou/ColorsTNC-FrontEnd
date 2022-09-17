import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './dataService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[DataService]
})
export class AppComponent implements OnInit {
  title = 'myApp';

  constructor(private router: Router){

  }

  ngOnInit(): void {
    //this.router.navigate(['/Home-Page'])
  }
  
}
