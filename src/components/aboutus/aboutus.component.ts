import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  hairDyeImage:string="assets/aboutImages/about1.png";

  hairProducts:string="assets/aboutImages/about2.png"

  appointment:string="assets/aboutImages/about3.png"
  GoToHairDyePage(pageName:string):void{
    this.router.navigate([`${pageName}`])
  }
  GoToHairProductsPage(pageName:string):void{
    this.router.navigate([`${pageName}`])
  }
  GoToHairAppointmentPage(pageName:string):void{
    this.router.navigate([`${pageName}`])
  }
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
