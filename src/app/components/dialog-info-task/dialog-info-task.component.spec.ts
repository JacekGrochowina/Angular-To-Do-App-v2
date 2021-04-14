import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogInfoTaskComponent } from './dialog-info-task.component';

describe('DialogInfoTaskComponent', () => {
  let component: DialogInfoTaskComponent;
  let fixture: ComponentFixture<DialogInfoTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogInfoTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogInfoTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
