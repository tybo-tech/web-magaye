/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WideCardComponent } from './wide-card.component';

describe('WideCardComponent', () => {
  let component: WideCardComponent;
  let fixture: ComponentFixture<WideCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WideCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WideCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
