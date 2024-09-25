import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertisePageComponent } from './expertise-page.component';

describe('ExpertisePageComponent', () => {
  let component: ExpertisePageComponent;
  let fixture: ComponentFixture<ExpertisePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpertisePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpertisePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
