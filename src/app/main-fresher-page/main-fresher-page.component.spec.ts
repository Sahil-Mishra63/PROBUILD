import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFresherPageComponent } from './main-fresher-page.component';

describe('MainFresherPageComponent', () => {
  let component: MainFresherPageComponent;
  let fixture: ComponentFixture<MainFresherPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainFresherPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainFresherPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
