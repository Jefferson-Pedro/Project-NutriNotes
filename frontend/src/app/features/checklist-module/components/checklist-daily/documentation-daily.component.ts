import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Checklist } from 'src/app/core/models/checklist';


@Component({
  selector: 'documention-daily',
  templateUrl: './documentation-daily.component.html',
  styleUrls: ['./documentation-daily.component.css']
})
export class DocumentationDailyComponent implements OnInit {

  public checkList: Checklist[] = [
    {num: 1, 
     item: 'Proteção nos cabelos', 
     conforme: true,
     naoConforme: false,
     naoSeAplica: false, 
     observacao:'Foi constatado que a funcionária não usava touca'
    },
    {num: 2, 
      item: 'Proteção nas mãos', 
      conforme: false,
      naoConforme: false,
      naoSeAplica: false, 
      observacao:'Foi constatado que a funcionária não usava luva'
     },
     {num: 3, 
      item: 'Proteção nos olhos', 
      conforme: false,
      naoConforme: false,
      naoSeAplica: false, 
      observacao:'Foi constatado que a funcionária não usava oculos de proteção'
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
