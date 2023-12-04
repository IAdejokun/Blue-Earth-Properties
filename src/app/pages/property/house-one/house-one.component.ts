import { Component } from '@angular/core';
import {ImgObject} from 'src/app/img-object' 
import { MediaItem } from 'src/app/media-item';

@Component({
  selector: 'app-house-one',
  templateUrl: './house-one.component.html',
  styleUrls: ['./house-one.component.css'],
  
})

export class HouseOneComponent {

  

  imgData : ImgObject[] = [
    {
      imgSrc:'https://drive.google.com/uc?id=1HKCvlyHXRBgZmcQGog9jc_Ht7ciOMKLm',
      imgAlt:'textOne'
    },
    {
      imgSrc:'https://drive.google.com/uc?id=13fLyDUC3zbs1PwpFEcbb61bEYJlebvIb',
      imgAlt:'textTwo'
    },
    {
      imgSrc:'https://drive.google.com/uc?id=1GyGrjgEzXEF0XJE_MPrANG-yaXZK4vrm',
      imgAlt:'textThree'
    }
  ]

  selectedImg: String  = this.imgData[0].imgSrc;

  selectedAlt: String = this.imgData[0].imgAlt;

  selectImg(img:any, imgAlt: any){
    this.selectedImg = img;
    this.selectedAlt = imgAlt;
  }

  moreMedia: MediaItem[] = [
    {
     src:'https://drive.google.com/uc?id=1a5rOrHHqtkwqRVkbCpU7uFj6B1xHHPdx',
     alt:'moreMediaImg',
     type:'image'
    },
    {
     src:'https://drive.google.com/uc?id=177ZLFrhsbtXjbkARh5J2w3RBWKNGXTMW',
     alt:'video',
     type:'video'
    },
    {
      src:'https://drive.google.com/uc?id=1a5rOrHHqtkwqRVkbCpU7uFj6B1xHHPdx',
      alt:'moreMediaImg',
      type:'image'
     }
   ]

}
  


