import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import {ToastrService} from 'ngx-toastr'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor( private toast: ToastrService){}

  contactFormData = new FormGroup({
    firstName: new FormControl('', [
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
    subject:new FormControl('',[
      Validators.required,
      Validators.minLength(3)
    ]),
     message: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
     ])

    //  to_name: new FormControl('Admin')
  })

//   contactFormSubmit(){
//     console.log();
//   }
// 
 contactFormSubmit(){
  console.log(this.contactFormData.value);
 }

}
