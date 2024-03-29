import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReasonDialogComponent } from './score-dialog.component';

describe('ScoreDialogComponent', () => {
  let component: ReasonDialogComponent;
  let fixture: ComponentFixture<ReasonDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReasonDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReasonDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
