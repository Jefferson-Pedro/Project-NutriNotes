import { Component, OnInit, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Checklist } from 'src/app/core/models/Checklist';
import { ChecklistService } from '../../../service';
import { Business } from 'src/app/core/models/Business';
import { Profile } from 'src/app/core/models/Profile';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Department } from 'src/app/core/models/Department';
import { MatTableDataSource } from '@angular/material/table';
import { QuestionDTO } from 'src/app/core/models/QuestionDTO';



@Component({
  selector: 'app-monthly-documentation',
  templateUrl: './documentation-monthly.component.html',
  styleUrls: ['./documentation-monthly.component.css'],
})
export class DocumentationMonthlyComponent implements OnInit {

  private formBuilder = inject(FormBuilder);
  private fb = inject(NonNullableFormBuilder);
  private router = inject(Router);
  private checklistService = inject(ChecklistService);
  
  protected isEditing: boolean = false;
  protected defaultTitle: string = 'CheckList Mensal - Documentação';
  protected editedTitle: string = '';

  protected checkList!: Checklist[];
  protected options: Business[] = [];
  protected setores?: Department[];
  private business: Business[] = [];
  private questions: QuestionDTO[] = [];
  protected formChecklist = this.buildForm();
  protected formQuestion = this.buildForm2();
  protected dataSource = new MatTableDataSource<QuestionDTO>();
  
  displayedColumns = ['idQuestion', 'question', 'status', 'considerations'];

  constructor() {}

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
      next: (value) => {
          this.business = value;
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

  private buildForm2() {
    //Criando FormArray vazio com nome questionsArray
    return this.fb.group({
      questionsArray: this.fb.array([]),
    });
  }

  private getQuestions(): void {
    //Faz requisição ao BD para buscar a lista de questões por template
    let num = 1
    this.checklistService.listQuestions(num).subscribe({
        next:(value)=> {
          this.dataSource.data = value;
          this.questions = value; 
          console.log('Resposta do Servidor:', value);
        },
        error:(err)=> {
            console.log(err);
        },
    });

    this.createFormArray(this.questions);
  }

  private createFormArray(questions: QuestionDTO[]): void {
    questions.forEach((item) => {
      this.questionFormArray.push(
        this.fb.group({
          idQuestion: [item.idQuestion],
          question: [item.question],
          status: ['', Validators.required],
          observacao: [''],
        })
      );
    });
  }

  public get questionFormArray(): FormArray {
    //Retorna o valor do formArray
    return this.formQuestion.controls.questionsArray as FormArray;
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
