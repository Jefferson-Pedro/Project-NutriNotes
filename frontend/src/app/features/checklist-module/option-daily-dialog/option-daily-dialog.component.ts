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

  public onDocumentationClick(): boolean{
    return this.documentacao = true; 
  }

  public onWorkplaceSafety(): boolean{
    return this.segDoTrab = true; 
  }

  public onEnvironmentalSafety(): boolean{
    return this.segAmb = true; 
  }

  public onFoodSafety(): boolean{
    return this.segAlim = true; 
  }

  public onEmployeeHealth(): boolean{
    return this.saudeFunc = true; 
  }

  onContinueClick(): void {
    switch (true) {
      case this.documentacao: {
        this.router.navigate(['checklist/documentation-daily']);
        break;
      }
      case this.segDoTrab: {
        console.log('Clicou no Seg do trabalho!');
        break;
      }
      case this.segAmb: {
        // Lógica relacionada à segurança ambiental
        break;
      }
      case this.segAlim: {
        // Lógica relacionada à segurança alimentar
        break;
      }
      case this.saudeFunc: {
        // Lógica relacionada à saúde do funcionário
        break;
      }
      default: {
        // Caso nenhum botão seja clicado
        break;
      }
    }
  }
  
}