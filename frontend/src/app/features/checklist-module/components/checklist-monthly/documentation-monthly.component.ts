import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Checklist } from 'src/app/core/models/checklist';

@Component({
  selector: 'app-monthly-documentation',
  templateUrl: './documentation-monthly.component.html',
  styleUrls: ['./documentation-monthly.component.css']
})
export class DocumentationMonthlyComponent {
  public checkList: Checklist[] = [
    {num: 1, 
     item: 'Proteção nos cabelos', 
     conforme: true,
     naoConforme: false,
     naoSeAplica: false, 
     observacao:''
    },
    {num: 2, 
      item: 'Proteção nas mãos', 
      conforme: false,
      naoConforme: false,
      naoSeAplica: false, 
      observacao:''
     },
     {num: 3, 
      item: 'Proteção nos olhos', 
      conforme: false,
      naoConforme: false,
      naoSeAplica: false, 
      observacao:''
     }
  ];

  public displayedColumns = ['num', 'item', 'conforme', 'naoConforme','naoSeAplica', 'observacao'];

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router){
    this.form = this.formBuilder.group({
      nomeEmpresa: ['',Validators.required],
      unidade: ['',Validators.required],
      gestor: ['',Validators.required],
      turno: [''],
      responsavelTec: [{ idProfile: 1 }],
      dataAuditoria: [null, Validators.required],
    });
  }

  ngOnInit(): void {}

  public onSave(){
    console.log(this.checkList.values);
  }

  public onCancel(){
    this.router.navigate(['home']);
  }
}
