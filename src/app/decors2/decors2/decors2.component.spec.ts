import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Decors2Component } from './decors2.component';

describe('Decors2Component', () => {
  let component: Decors2Component;
  let fixture: ComponentFixture<Decors2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Decors2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Decors2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
