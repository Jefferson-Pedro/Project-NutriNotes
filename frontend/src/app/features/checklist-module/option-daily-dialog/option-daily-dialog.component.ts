import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-option-daily',
  templateUrl: './option-daily-dialog.component.html',
  styleUrls: ['./option-daily-dialog.component.css']
})
export class OptionDailyDialogComponent implements OnInit {

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
      this.router.navigate(['checklist/documentation-daily']);
    }
  }

}
