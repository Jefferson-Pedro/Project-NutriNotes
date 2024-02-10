import { Component, inject, type OnInit } from '@angular/core';
import {
  FormArray,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Checklist } from 'src/app/core/models/Checklist';
import { QuestionDTO } from 'src/app/core/models/QuestionDTO';
import { ChecklistService } from 'src/app/features/checklist-module/service';

@Component({
  selector: 'app-workplace-safety-questions',
  templateUrl: './workplace-safety-questions.component.html',
  styleUrls: ['./workplace-safety-questions.component.css'],
})
export class WorkplaceSafetyQuestionsComponent implements OnInit {

  private fb = inject(NonNullableFormBuilder);
  private router = inject(Router);
  private checklistService = inject(ChecklistService);
  //protected formQuestion = inject(FormGroup);
  protected formQuestion!: FormGroup;
  protected dataSource = new MatTableDataSource<QuestionDTO>();

  private templateId = history.state.id;
  protected checkList!: Checklist[];

  displayedColumns = ['idQuestion', 'question', 'status', 'considerations'];

  public get questionFormArray(): FormArray {
    //Retorna o valor do formArray (variavel declarada no html)
    return this.formQuestion?.controls['questionsArray'] as FormArray;
  }

  ngOnInit(): void {
    this.getQuestions();
  }

  private buildForm(questions: QuestionDTO[]): void {
    this.formQuestion = this.fb.group({
      questionsArray: this.fb.array(
        questions.map((item) =>
          this.fb.group({
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
          this.buildForm(questions);
          console.log(questions);
        },
        error:(err)=> {
            console.log(err);
        },
    });
  }

  public onSubmit() {
    console.log(this.checkList.values);
  }

  public onCancel() {
    this.router.navigate(['home']);
  }
}
