import { Component } from '@angular/core';
import {ImgObject} from 'src/app/img-object' 
import { MediaItem } from 'src/app/media-item';
import {ToastrService} from 'ngx-toastr';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { nigeriaPhoneNumberValidator } from 'src/app/nigerianPhoneNumberValidator';
import emailjs from '@emailjs/browser'

@Component({
  selector: 'app-house-one',
  templateUrl: './house-one.component.html',
  styleUrls: ['./house-one.component.css'],
  
})

export class HouseOneComponent {

constructor(private toast:ToastrService){}

  listingTitle: string  = '5 Bedroom Detached Duplex with Swimming Pool';
  

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

   //Modal Selection
   showModal = false;
  
   toggleModal(){
     this.showModal = !this.showModal;
   }



   //form data

   buyPropertyFormData = new FormGroup({
    firstName: new FormControl('',[
      Validators.required,
      Validators.minLength(3)
    ]),
    
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')
    ]),
    phoneNumber: new FormControl('', [
      Validators.required,
      nigeriaPhoneNumberValidator()
    ]),

    propertyOption: new FormControl(this.listingTitle),

    to_name: new FormControl('Blue Earth Admin')
})


 async buyPropertyFormDataSubmit(){
   
    try{

      emailjs.init('HiNBI5ByqicBTivny')


      let response = await emailjs.send("service_y2iss3v","template_lvhzh0n",{
        lastName: this.buyPropertyFormData.value.lastName ,
        firstName: this.buyPropertyFormData.value.firstName,
        to_name: this.buyPropertyFormData.value.to_name,
        propertyOption: this.buyPropertyFormData.value.propertyOption,
        email: this.buyPropertyFormData.value.email,
        phoneNumber: this.buyPropertyFormData.value.phoneNumber,
        });

        this.toast.success("Email Sent Successfully, Check Mail", 'Success')
        
        this.buyPropertyFormData.reset()

    }

  catch(err){
    this.toast.error()
    this.buyPropertyFormData.reset()
  }    
  }

}
  


