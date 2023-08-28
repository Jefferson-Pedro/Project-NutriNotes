import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-option-cl-daily',
  templateUrl: './option-cl-daily.component.html',
  styleUrls: ['./option-cl-daily.component.css']
})
export class OptionClDailyComponent implements OnInit {

  private documentacao: boolean = false;
  private segDoTrab: boolean = false;
  private segAmb: boolean = false;
  private segAlim: boolean = false;
  private saudeFunc: boolean = false;

  ngOnInit(): void {}

  public constructor (private router:Router){}

  onDocumentationClick(){
    this.documentacao = true;
    console.log('clicou em documentação!', this.documentacao);
  }
   
  onContinueClick(){
    if(this.documentacao == true){
      this.router.navigate(['documentation']);
    }
  }

}
