import { Component, HostListener } from '@angular/core';
import {PropertyModel} from 'src/app/property-model';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  isScrolled = false;

  ngOnInit():void{
    AOS.init()
  }

  @HostListener('window:scroll', [])

  

  onScroll(): void{
    this.isScrolled = window.scrollY > 50
  }

  //lising properties
  homeListings: PropertyModel[] = [
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
  }

]

 
}
