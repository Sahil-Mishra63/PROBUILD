import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateMenuComponent } from './template-menu.component';

describe('TemplateMenuComponent', () => {
  let component: TemplateMenuComponent;
  let fixture: ComponentFixture<TemplateMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
