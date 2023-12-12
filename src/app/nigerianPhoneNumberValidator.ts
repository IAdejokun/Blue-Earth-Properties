import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function nigeriaPhoneNumberValidator(): ValidatorFn{

    return (control:AbstractControl): ValidationErrors | null => {
        const phoneNumber = control.value;

        if( !phoneNumber || typeof phoneNumber !== 'string' ){
            return null;
        } 

        const phoneRegex = /^0[789]\d{9}$/;

        const isValid = phoneRegex.test(phoneNumber);

        return isValid ? null : {invalidNigeriaPhoneNumber: true}
    }

}