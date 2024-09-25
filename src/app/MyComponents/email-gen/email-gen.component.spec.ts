import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailGenComponent } from './email-gen.component';

describe('EmailGenComponent', () => {
  let component: EmailGenComponent;
  let fixture: ComponentFixture<EmailGenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailGenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
