import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-option-monthly-dialog',
  templateUrl: './option-monthly-dialog.component.html', 
  styleUrls: ['./option-monthly-dialog.component.css']
})
export class OptionMonthlyDialogComponent {
  
  private documentacao: boolean = false;
  private segDoTrab: boolean = false;
  private segAmb: boolean = false;
  private segAlim: boolean = false;
  private saudeFunc: boolean = false;

  ngOnInit(): void {}

  public constructor (private router:Router){}

  onDocumentationClick(){
    this.documentacao = true;
  }
   
  onContinueClick(){
    if(this.documentacao == true){
      this.router.navigate(['checklist/documentation-monthly']);
    }
  }

}
