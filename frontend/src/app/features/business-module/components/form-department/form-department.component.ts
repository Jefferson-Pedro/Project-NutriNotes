import { Component, Inject, inject } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Department } from 'src/app/core/models/Department';
import { BusinessService } from '../../services';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-form-department',
  templateUrl: './form-department.component.html',
  styleUrls: ['./form-department.component.css']
})
export class FormDepartmentComponent {

  private formBuilder = inject(NonNullableFormBuilder);
  private businessService = inject(BusinessService);

  protected form = this.buildForm();
  //private idBusiness: number = history.state.id;
  public idBusiness!: number;
  protected department!: Department[];

  protected displayedColumns = ['nome', 'actions'];

  public constructor(@Inject(MAT_DIALOG_DATA) private data: any){
    this.idBusiness = this.data.idBusiness;
    this.list();
  }

  private buildForm() {
    return this.formBuilder.group({
      idSetores: [null],
      nome: ['', [Validators.required, Validators.minLength(3)]],
    })
  }

  public list(){

    this.businessService.findDepartmentByBusiness(this.idBusiness).subscribe({
      next: (value) => {
       this.department = value;  
       console.log('Departamentos: ', value);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  public onEdit(department: Department){}

  public onDelete(department: Department){}

  protected onSubmit(){}
}
