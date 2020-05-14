import { AbstractControl, ValidatorFn } from "@angular/forms";

export function passwordValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): { invalid: boolean } => {
        if (control.get('password').value !== control.get('repassword').value) {
            return { invalid: true };
        }
    };
}