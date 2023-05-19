import { Component } from '@angular/core';
import { HeaderComponent } from '../header-nav/header.component';
import { TemplateService } from '../template.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {  
 constructor(public service: TemplateService){}
}
