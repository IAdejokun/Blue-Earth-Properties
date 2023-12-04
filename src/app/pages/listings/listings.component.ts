import { Component } from '@angular/core';
import { PropertyModel } from 'src/app/property-model';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent {

  listings: PropertyModel[] = [
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

// filtered list array
  filteredListings = [...this.listings];

  // selected location nav

  selectedLocation: string = 'All';

filterListing(location: string){
   this.selectedLocation = location;

   if(location === 'All'){
    this.filteredListings = [...this.listings]
   } else {
    this.filteredListings = this.listings.filter(list => {
      const locationParts = list.location.split(',');
      const locationAfterComma = locationParts.length > 1 ? locationParts[1].trim().toLowerCase() : '';
      return locationAfterComma === location.toLowerCase();
    } )
   }
    
  
  }





}
