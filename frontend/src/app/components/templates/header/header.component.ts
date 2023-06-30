import { Component } from '@angular/core';
import { TemplateService } from '../template.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public service: TemplateService, private route: Router) {}

  public onCLickReminderNotifications(){
    this.route.navigate(['reminder/notifications']);
  }

}
