import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { Validators } from '../validators';
@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css']
})
export class EquationComponent implements OnInit {
  mathForm = new FormGroup({
    a: new FormControl(random()),
    b: new FormControl(random()),
    answer: new FormControl('')
  }, [
    Validators.addition('a','b','answer')
  ])
  constructor() { }

  get a(){
    return this.mathForm.value.a;
  }

  get b(){
    return this.mathForm.value.b;
  }
  ngOnInit(): void {
    console.log(this.mathForm.statusChanges);
    this.mathForm.statusChanges.subscribe((value) => {
      if(value === 'VALID'){
        setTimeout(() => {
          this.mathForm.setValue({
            a : random(),
            b: random(),
            answer: ''
          })
        }, 100);
      }
    })
  }
}

let random = () => Math.floor(Math.random()*10);