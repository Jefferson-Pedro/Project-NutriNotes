import { Component, OnInit } from '@angular/core';
import { CheckListDaily } from 'src/app/models/check-list-daily';

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
    }
  ];
  public displayedColumns = ['num', 'item', 'conforme', 'naoConforme','naoSeAplica', 'observacao'];

  constructor(){
    //this.checkList = [];
  }

  ngOnInit(): void {
    //this.checkList = [];
  }

  public onSave(){}

  public onCancel(){}

}
