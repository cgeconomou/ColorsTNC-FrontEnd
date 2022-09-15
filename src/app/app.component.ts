import { Component } from '@angular/core';
import { DataService } from './dataService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[DataService]
})
export class AppComponent {
  title = 'myApp';

  constructor(private dataService: DataService){

  }
  
}
