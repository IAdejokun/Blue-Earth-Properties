import { formatPercent } from '@angular/common';
import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {nigeriaPhoneNumberValidator} from 'src/app/nigerianPhoneNumberValidator'
import emailjs from '@emailjs/browser'

@Component({
  selector: 'app-invest',
  templateUrl: './invest.component.html',
  styleUrls: ['./invest.component.css']
})
export class InvestComponent {

  investorOption !: string;

 

 //Modal Selection
 showModal = false;
  
 toggleModal(){
   this.showModal = !this.showModal;
  }

  //investOption

  investToday(val:string){
    this.investorOption = val;

    this.investFormData.get('investOption')?.setValue(val)

    this.toggleModal()

    console.log(this.investorOption);
    
  }



  constructor(private toast:ToastrService){}


  //form logic

  investFormData = new FormGroup({
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

      investOption: new FormControl('',[
        Validators.required
      ] ),
      to_name: new FormControl('Blue Earth Admin')
  })



  async investFormDataSubmit(){

    try{
      emailjs.init('HiNBI5ByqicBTivny')


      let response = await emailjs.send("service_y2iss3v","template_jc5ic6e",{
        lastName: this.investFormData.value.lastName ,
        firstName: this.investFormData.value.firstName,
        to_name: this.investFormData.value.to_name,
        investOption: this.investFormData.value.investOption,
        email: this.investFormData.value.email,
        phoneNumber: this.investFormData.value.phoneNumber,
        });

        this.toast.success("Email Sent Successfully, Check Mail", 'Success')
        
        this.investFormData.reset()

       
      }
   
     catch(err){
      this.toast.error('Email not Sent', 'Error');
      this.investFormData.reset()
     } 



  }

    
}


