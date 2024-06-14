import { CommonModule } from '@angular/common';
import { Component, inject, type OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { BusinessCreate } from 'src/app/core/models/BusinessCreate';
import { Checklist } from 'src/app/core/models/Checklist';
import { Department } from 'src/app/core/models/Department';
import { ItemChecklist } from 'src/app/core/models/ItemChecklist';
import { QuestionInfo } from 'src/app/core/models/QuestionInfo';
import { ChecklistService } from 'src/app/features/checklist-module/service';

@Component({
  selector: 'app-documentation-questions',
  templateUrl: './documentation-questions.component.html',
  styleUrls: ['./documentation-questions.component.css'],
})
export class DocumentationQuestionsComponent implements OnInit {

  private router = inject(Router);
  private checklistService = inject(ChecklistService);
  private formBuilderQuestions = inject(NonNullableFormBuilder);
  private formBuilderChecklist = inject(FormBuilder);

  protected formQuestion!: FormGroup;
  protected dataSource = new MatTableDataSource<QuestionInfo>();
  protected formChecklist = this.buildFormChecklist();

  private templateId = history.state.id;
  private itemChecklist!: ItemChecklist;
  private checklist!: Checklist;
  protected setores?: Department[];
  private business: BusinessCreate[] = [];
  protected options: BusinessCreate[] = [];

  displayedColumns = ['idQuestion', 'question', 'status', 'considerations'];

  public get questionFormArray(): FormArray {
    //Retorna o valor do formArray (variavel declarada no html)
    return this.formQuestion?.controls['questionsArray'] as FormArray;
  }

  ngOnInit(): void {
    this.getQuestions();
    this.onInputNomeEmpresaListener();
    this.listBusiness();
  }

  protected buildFormChecklist() {
    return this.formBuilderChecklist.group({
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
      this.setores = (value as BusinessCreate).setores;
      this.formChecklist.patchValue({
        gestor: (value as BusinessCreate).representante,
      });
    });

  }

  private findMatchingOptions(searchText: string) {
    // Faz uma chamada ao array para buscar as opções correspondentes com base no input do user
    const filteredBusiness = this.business.filter(res => res.nome.toLowerCase().startsWith(searchText.toLowerCase()));
    //console.log("Resultado da lista:",filteredBusiness);
    return this.options = filteredBusiness;
  }

  protected displayFn(business: BusinessCreate): string{
    return business?.nome || '';
  }

  //Daqui para baixo, tratamos do FormArray

  private buildFormQuestion(questions: QuestionInfo[]): void {
    this.formQuestion = this.formBuilderQuestions.group({
      questionsArray: this.formBuilderQuestions.array(
        questions.map((item) =>
          this.formBuilderQuestions.group({
            idQuestion: item.idquestion,
            question: item.question,
            status: ['', Validators.required],
            observacao: '',
          })
        )
      ),
    });
  }

  private getQuestions(): void {
    //Faz requisição ao BD para buscar a lista de questões por template
    this.checklistService.listQuestions(this.templateId).subscribe({
        next:(questions)=> {
          this.dataSource.data = questions;
          this.buildFormQuestion(questions);
          //console.log(questions);
        },
        error:(err)=> {
            console.log(err);
        },
    });
  }

  public onSubmit() {
    const checklist = this.formChecklist.getRawValue();
    console.log('Build Form:', checklist);
    console.log('Build Form2:', this.questionFormArray.value);

  }

  public onCancel() {
    this.router.navigate(['home']);
  }

}
