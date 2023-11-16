import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Department } from 'src/app/core/models/Department';
import { BusinessService } from '../../services';

@Component({
  selector: 'app-form-department',
  templateUrl: './form-department.component.html',
  styleUrls: ['./form-department.component.css']
})
export class FormDepartmentComponent {

  private formBuilder = inject(NonNullableFormBuilder);
  private businessService = inject(BusinessService);

  protected form = this.buildForm();
  protected department!: Department[];

  protected displayedColumns = ['nome', 'actions'];

  public constructor(){
    this.list();
  }


  private buildForm() {
    return this.formBuilder.group({
      idSetores: [null],
      nome: ['', [Validators.required, Validators.minLength(3)]],
    })
  }

  public list(){
    this.businessService.findDepartmentByBusiness().subscribe({
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
