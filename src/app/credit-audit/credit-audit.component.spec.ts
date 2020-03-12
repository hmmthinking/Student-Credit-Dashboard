import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditAuditComponent } from './credit-audit.component';

describe('CreditAuditComponent', () => {
  let component: CreditAuditComponent;
  let fixture: ComponentFixture<CreditAuditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditAuditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
