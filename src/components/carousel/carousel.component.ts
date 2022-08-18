import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  firstImg:string = '../assets/carouselimages/slide1.jpg'
  secondImg:string = '../assets/carouselimages/slide2.jpg'
  thirdImg:string = '../assets/carouselimages/slide3.jpg'
  images = [];
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
