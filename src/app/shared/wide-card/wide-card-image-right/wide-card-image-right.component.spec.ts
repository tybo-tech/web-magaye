/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WideCardImageRightComponent } from './wide-card-image-right.component';

describe('WideCardImageRightComponent', () => {
  let component: WideCardImageRightComponent;
  let fixture: ComponentFixture<WideCardImageRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WideCardImageRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WideCardImageRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
