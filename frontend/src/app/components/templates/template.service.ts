import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  constructor() {}

  private opened: boolean = true;

  toggleMenu(): void {
    this.opened = !this.opened;
    console.log(this.opened);
  }

  isMenuOpen(): boolean {
    return this.opened;
  }



  
}
