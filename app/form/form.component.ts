import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  constructor(private fb:FormBuilder) {}

  profileForm = this.fb.group({ // form builders
    firstName : ['',Validators.required], 
    lastName : ['',Validators.required],
    address : this.fb.group({   //nested form
      city: ['',Validators.required],
      street: ['',Validators.required],
      zip: ['',Validators.required],
      state: ['',Validators.required]
      })
  });

 onSubmit(event){
  console.log(this.profileForm.value)
 }
  ngOnInit() {
  }

}
