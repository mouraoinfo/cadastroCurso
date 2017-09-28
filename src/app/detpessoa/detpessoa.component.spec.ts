import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetpessoaComponent } from './detpessoa.component';

describe('DetpessoaComponent', () => {
  let component: DetpessoaComponent;
  let fixture: ComponentFixture<DetpessoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetpessoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetpessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
