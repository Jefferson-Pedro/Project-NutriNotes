import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  constructor() {}

  public opened: boolean = true;

  toggleMenu(): void {
    this.opened = !this.opened;
    console.log('template service:', this.opened);
  }

  isMenuOpen(): boolean {
    return this.opened;
  }



  
}
