import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CheckListDaily } from 'src/app/core/models/check-list-daily';


@Component({
  selector: 'app-checklist-documention',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {

  public checkList: CheckListDaily[] = [
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

  constructor(private formBuilder: FormBuilder, private route: Router){
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
    this.route.navigate(['home']);
  }

}
