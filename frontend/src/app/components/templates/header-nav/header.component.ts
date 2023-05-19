import { Component } from '@angular/core';
import { TemplateService } from '../template.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public service: TemplateService) {}

}
