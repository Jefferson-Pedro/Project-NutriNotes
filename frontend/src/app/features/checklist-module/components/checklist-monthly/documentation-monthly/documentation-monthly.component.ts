import { Component, Input, OnInit, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Checklist } from 'src/app/core/models/Checklist';
import { ChecklistService } from '../../../service';
import { Business } from 'src/app/core/models/Business';
import { Profile } from 'src/app/core/models/Profile';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Department } from 'src/app/core/models/Department';
import { MatTableDataSource } from '@angular/material/table';
import { QuestionDTO } from 'src/app/core/models/QuestionInfo';

@Component({
  selector: 'app-monthly-documentation',
  templateUrl: './documentation-monthly.component.html',
  styleUrls: ['./documentation-monthly.component.css'],
})
export class DocumentationMonthlyComponent implements OnInit {

  private formBuilder = inject(FormBuilder);
  private fb = inject(NonNullableFormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private checklistService = inject(ChecklistService);
  
  protected isEditing: boolean = false;
  protected defaultTitle: string = 'CheckList Mensal - Documentação';
  protected editedTitle: string = '';

  private templateId = history.state.id;
  protected checkList!: Checklist[];
  protected options: Business[] = [];
  protected setores?: Department[];
  private business: Business[] = [];
  protected formChecklist = this.buildForm();
  protected formQuestion!: FormGroup;
  protected dataSource = new MatTableDataSource<QuestionDTO>();
  
  displayedColumns = ['idQuestion', 'question', 'status', 'considerations'];

  public get questionFormArray(): FormArray {
    //Retorna o valor do formArray (variavel declarada no html)
    return this.formQuestion?.controls['questionsArray'] as FormArray;
  }

  ngOnInit(): void {
    this.onInputNomeEmpresaListener();
    this.listBusiness();
    this.getQuestions(); 
  }

  protected buildForm(){
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
    this.formChecklist.controls.nomeEmpresa.valueChanges.subscribe(
      (value)=>{
        if(!value){
          this.options = []; // Limpa as opções quando o campo está vazio
          return
        }
        if (typeof value === 'string') {
          this.findMatchingOptions(value);
          return
        } 
        this.setores = (value as Business).setores;
        this.formChecklist.patchValue({
          gestor: (value as Business).representante
        });
    });
  }

  private findMatchingOptions(searchText: string) {
    // Faz uma chamada ao array para buscar as opções correspondentes com base no input do user
    const filteredBusiness = this.business.filter(res => res.nome.toLowerCase().startsWith(searchText.toLowerCase()));
    console.log("Resultado da lista:",filteredBusiness);
    return this.options = filteredBusiness;
  
  }

  protected displayFn(business: Business): string{
    return business?.nome || '';
  }

  private buildForm2(questions: QuestionDTO[]): void {
    this.formQuestion = this.fb.group({
      questionsArray: this.fb.array(
        questions.map((item) => this.fb.group({
          idQuestion: item.idquestion,
          question: item.question,
          status: ['', Validators.required],
          observacao: '',
        })
        )
      )
    });
  }

  private getQuestions(): void {
    //Faz requisição ao BD para buscar a lista de questões por template
    const id = 1;
    this.checklistService.listQuestions(id).subscribe({
        next:(questions)=> {
          this.dataSource.data = questions;
          this.buildForm2(questions);
          console.log(questions);
        },
        error:(err)=> {
            console.log(err);
        },
    });
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

  public onSubmit() {
    console.log(this.checkList.values);
  }

  public onCancel() {
    this.router.navigate(['home']);
  }
}
