import { Component, OnDestroy, OnInit } from '@angular/core';

import { auditTime, distinctUntilChanged, map, takeUntil } from 'rxjs/operators';
import { Subject, fromEvent } from 'rxjs';

import { AuthService } from 'src/app/features/login-module/services/auth';
import { SidenavService } from '../../services/sidenav';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {
  
 destroyed$ = new Subject<void>();  
 screenWidth!: number;

 constructor(protected navService: SidenavService, private authserv: AuthService ){}

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

}
