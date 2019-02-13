import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  constructor() {}

  profileForm = new FormGroup({
    firstName : new FormControl(''), //form control instance
    lastName : new FormControl(''),
    address : new FormGroup({   //nested form
      city: new FormControl(''),
      street: new FormControl(''),
      zip: new FormControl(''),
      state: new FormControl('') 
      })
  });

 onSubmit(event){
  console.log(this.profileForm.value)
 }
  ngOnInit() {
  }

}
