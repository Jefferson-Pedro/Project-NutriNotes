import { Component, EventEmitter, Output, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-option-monthly-dialog',
  templateUrl: './option-monthly-dialog.component.html', 
  styleUrls: ['./option-monthly-dialog.component.css']
})
export class OptionMonthlyDialogComponent {

    private readonly router = inject(Router);
    private route = inject (ActivatedRoute);
  
    protected checklistPages = [
      { id: 1, name: 'Documentação', path: 'checklist/documentacao-mensal' },
      { id: 2, name: 'Segurança do Trabalho', path: 'checklist/seguranca-trabalho' },
      { id: 3, name: 'Segurança Ambiental', path: 'checklist/seguranca-ambiental' },
      { id: 4, name: 'Segurança Alimentar', path: 'checklist/seguranca-alimentar' },
      { id: 5, name: 'Saúde do Funcionário', path: 'checklist/saude-funcionario' },
    ];
  
    selectedChecklist!: {  id: number, name: string; path: string; };

    private navigateToSelectedPage(): void{
      this.router.navigate([`${this.selectedChecklist.path}`], { state: { id: this.selectedChecklist.id } });
    }
  
    setSelectedPage(page: { id: number, name: string, path: string; }): void {

      this.selectedChecklist = page;
      this.navigateToSelectedPage();

      console.log('setSelectedPage:', page);
      console.log('ID Enviado:', this.selectedChecklist.id);
    }
}

