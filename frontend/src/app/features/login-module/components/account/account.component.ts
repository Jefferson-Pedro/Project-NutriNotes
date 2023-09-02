import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

  firstFormGroup = this.formBuilder.group({
    email: ['', Validators.required],
  });
  secondFormGroup = this.formBuilder.group({
    senha: ['', Validators.required],
  });
  thirdFormGroup = this.formBuilder.group({
    crn: ['', Validators.required],
  });
  isEditable = false;

  public stepperOrientation: 'horizontal' | 'vertical' = 'horizontal';
  
  constructor(private formBuilder: FormBuilder) {
    this.setStepperOrientation();
  }

  //OUVE O EVENTO DE REDIMENSIONAMENTO DE TELA
  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    this.setStepperOrientation();
  }

  //VERIFICA LARGURA DA TELA E DEFINE SE VAI SER VERTICAL OU HORIZONTAL
  private setStepperOrientation() {
    const screen = window.innerWidth;
    this.stepperOrientation = screen <= 460 ? 'vertical' : 'horizontal';
  }
  

  public onClose(){}

  public onSubmit(){}
}
