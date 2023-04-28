import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  form: FormGroup;
  
  constructor(private formBuilder: FormBuilder){
    this.form = this.formBuilder.group({
      nome: [String],
      sexo: [String],
      email: [String],
      tel: [Number],
      crn: [Number],
    });
  }

  public onSubmit(){
    console.log(this.form.value)
  }

  public onCancel(){}
}
