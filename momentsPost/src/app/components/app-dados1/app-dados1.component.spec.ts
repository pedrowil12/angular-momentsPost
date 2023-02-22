import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDados1Component } from './app-dados1.component';

describe('AppDados1Component', () => {
  let component: AppDados1Component;
  let fixture: ComponentFixture<AppDados1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppDados1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppDados1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
