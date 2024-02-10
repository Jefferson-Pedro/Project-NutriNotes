import { Component, inject, type OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Business } from 'src/app/core/models/Business';
import { Department } from 'src/app/core/models/Department';
import { ChecklistService } from 'src/app/features/checklist-module/service';


@Component({
  selector: 'app-workplace-safety-form',
  templateUrl: './workplace-safety-form.component.html',
  styleUrls: ['./workplace-safety-form.component.css'],
})
export class WorkplaceSafetyFormComponent implements OnInit {
  private formBuilder = inject(FormBuilder);
  protected formChecklist = this.buildForm();
  private checklistService = inject(ChecklistService);

  protected setores?: Department[];
  private business: Business[] = [];
  protected options: Business[] = [];

  ngOnInit(): void {
    this.onInputNomeEmpresaListener();
    this.listBusiness();
  }

  protected buildForm() {
    return this.formBuilder.group({
      nomeEmpresa: ['', Validators.required],
      unidade: ['', Validators.required],
      gestor: ['', Validators.required],
      turno: ['', Validators.required],
      responsavelTec: [{ idProfile: 1 }],
      dataAuditoria: [null, Validators.required],
    });
  }

  private listBusiness(){
    // Faz uma chamada unica ao BD para buscar as todas as empresas no banco de dados;
    this.checklistService.listBusiness().subscribe({
      next: (business) => {
          this.business = business;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  protected onInputNomeEmpresaListener() {
    //Toda vez que for digitado algo, será ouvido as alterações
    this.formChecklist.controls.nomeEmpresa.valueChanges.subscribe((value) => {
      if (!value) {
        this.options = []; // Limpa as opções quando o campo está vazio
        return;
      }
      if (typeof value === 'string') {
        this.findMatchingOptions(value);
        return;
      }
      this.setores = (value as Business).setores;
      this.formChecklist.patchValue({
        gestor: (value as Business).representante,
      });
    });
  }

  protected displayFn(business: Business): string{
    return business?.nome || '';
  }

  private findMatchingOptions(searchText: string) {
    // Faz uma chamada ao array para buscar as opções correspondentes com base no input do user
    const filteredBusiness = this.business.filter(res => res.nome.toLowerCase().startsWith(searchText.toLowerCase()));
    console.log("Resultado da lista:",filteredBusiness);
    return this.options = filteredBusiness;
  }
}
