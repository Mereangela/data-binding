import { 
  AfterContentChecked, 
  AfterContentInit, 
  AfterViewInit,
  AfterViewChecked,  
  Component, 
  DoCheck, 
  OnChanges, 
  OnDestroy, 
  OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ciclo-vida',
  templateUrl: './ciclo-vida.component.html',
  styleUrls: ['./ciclo-vida.component.css']
})
export class CicloVidaComponent implements OnChanges,
  OnInit, DoCheck, AfterContentInit, AfterViewInit, AfterContentChecked, AfterViewChecked, OnDestroy
{

   @Input() valorInicial: number = 1;

   constructor() {
    this.log('constructor');
   }

   ngOnChanges() {
    this.log('ngOnChanges');
   }

   ngOnInit() {
    this.log('ngOnInit');
  }

  ngDoCheck() {
    this.log('ngDoCheck');
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    this.log('ngAfterViewIniti');
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    this.log('ngOnDestroy');
  }

  private log(hook: string) {
    console.log(hook);
  }

}
