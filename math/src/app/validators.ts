import { AbstractControl } from "@angular/forms";

export class Validators {
    static addition (sourceOne: string, sourceTwo: string, target: string) {
        return ( form: AbstractControl) => {
        if(form.value[sourceOne ]+ form.value[sourceTwo] === parseInt(form.value[target])) return null;
        return {addtion : true};
        }
    } 
}
