import { Component, Input, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-documentation-container',
  templateUrl: './documentation-container.component.html',
  styleUrls: ['./documentation-container.component.css'],
})
export class DocumentationContainerComponent implements OnInit {
  
  protected isEditing: boolean = false;
  protected defaultTitle: string = 'CheckList Mensal - Documentação';
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

 /* public onSubmit() {
    console.log(this.checkList.values);
  }

  public onCancel() {
    this.router.navigate(['home']);
  }*/
}
