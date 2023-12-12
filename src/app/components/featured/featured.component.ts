import { Component, HostListener } from '@angular/core';
import {PropertyModel} from 'src/app/property-model'
import Swiper from 'swiper';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent {

  featured: PropertyModel[] = [
    {
    title:'3 Bedroom Terrace',
    location : 'Ikeja, Lagos',
    price : 100000000,
    route : '/listings/houseOne',
    propertyImg : 'assets/house.jpeg',
    descriptionOne: 'One Bedroom',
    descriptionTwo: 'Two Toilet'
  },
  {
    title:'4 Bedroom Duplex',
    location : 'Garki, Abuja',
    price : 1000000,
    route : '/listings/houseOne',
    propertyImg : 'assets/house2.png',
    descriptionOne: 'One Bedroom',
    descriptionTwo: 'Two Toilet',
    descriptionThree:'Pool'
  },
  {
    title:'4 Bedroom Terrace Duplex',
    location : 'Oshogbo, Osun',
    price : 20000000,
    route : '/listings/houseOne',
    propertyImg : 'assets/house1.jpeg',
    descriptionOne: 'One Bedroom',
    descriptionTwo: 'Two Toilet'
  },
  {
    title:'4 Bedroom Terrace Duplex',
    location : 'Ife, osun',
    price : 200000000,
    route : '/listings/houseOne',
    propertyImg : 'assets/house1.jpeg',
    descriptionOne: 'One Bedroom',
    descriptionTwo: 'Two Toilet'
  },

]

slidesPerView:number = 3;

screenWidth!:number;

@HostListener('window:resize')
getScreenWidth(){
  this.screenWidth = window.innerWidth;

  if(this.screenWidth >= 320 && this.screenWidth <= 756){
    this.slidesPerView = 1;
  }else if(this.screenWidth >= 756 && this.screenWidth <= 1120){
    this.slidesPerView = 2;
  }else if( this.screenWidth >= 1120 && this.screenWidth <= 1200 ){
    this.slidesPerView = 3;
  }

}


}
