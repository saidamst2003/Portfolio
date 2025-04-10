import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceeComponent } from './experiencee.component';

describe('ExperienceeComponent', () => {
  let component: ExperienceeComponent;
  let fixture: ComponentFixture<ExperienceeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
