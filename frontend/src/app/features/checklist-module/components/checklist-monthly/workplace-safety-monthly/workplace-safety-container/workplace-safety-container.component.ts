import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';

@Component({
    selector: 'app-workplace-safety-container',
    templateUrl: './workplace-safety-container.component.html',
    styleUrls: ['./workplace-safety-container.component.css'],
})
export class WorkplaceSafetyContainerComponent implements OnInit {

    protected isEditing: boolean = false;
    protected defaultTitle: string = 'CheckList Mensal - Segurança do Trabalho';
    protected editedTitle: string = '';
  
  
    ngOnInit(): void {
     
    }
  
    startEditing() {
      // Entra no modo de edição
      this.isEditing = true;
      this.editedTitle = this.defaultTitle;
    }
  
    stopEditing() {
      // Sai do modo de edição e atualiza o título
      this.isEditing = false;
      this.defaultTitle = this.editedTitle;
    }
  
    cancelEditing() {
      // Cancela a edição e volta para o título original
      this.isEditing = false;
      this.editedTitle = this.defaultTitle;
    }

}
