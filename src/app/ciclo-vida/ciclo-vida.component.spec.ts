/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CicloVidaComponent } from './ciclo-vida.component';

describe('CicloVidaComponent', () => {
  let component: CicloVidaComponent;
  let fixture: ComponentFixture<CicloVidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CicloVidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CicloVidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
