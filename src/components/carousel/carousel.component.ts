import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  firstImg:string = '../assets/carouselimages/slide11.png'
  secondImg:string = '../assets/carouselimages/slide2.jpg'
  thirdImg:string = '../assets/carouselimages/slide13.png'
  images = [];
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
