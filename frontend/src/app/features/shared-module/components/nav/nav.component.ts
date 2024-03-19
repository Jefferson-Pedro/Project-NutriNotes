import { Component, OnDestroy, OnInit, inject } from '@angular/core';

import { auditTime, distinctUntilChanged, map, takeUntil } from 'rxjs/operators';
import { Subject, fromEvent } from 'rxjs';

import { AuthService } from 'src/app/features/login-module/services/auth';
import { SidenavService } from '../../services/sidenav';
import { LocalStorageService } from '../../services/localStorage';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {

  protected navService = inject(SidenavService);
  private authserv = inject(AuthService);
  private localStorageServ = inject(LocalStorageService);
  protected destroyed$ = new Subject<void>();  
  protected screenWidth!: number;

 constructor(){}

  ngOnInit(): void {
   this.setScreenWidth();
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }  

  private setScreenWidth(): void {
  fromEvent(window, 'resize')
    .pipe(
      takeUntil(this.destroyed$),
      map((event) => (event.target as Window).innerWidth),
      distinctUntilChanged(),
      auditTime(300)
    )
    .subscribe((value: number) => {
      this.screenWidth = value;
      console.log(value);
    });
  }

  public logout():void{
    this.localStorageServ.removeToken();
  }

}
