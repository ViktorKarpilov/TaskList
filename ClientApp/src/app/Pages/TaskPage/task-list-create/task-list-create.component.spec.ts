import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListCreateComponent } from './task-list-create.component';

describe('TaskListCreateComponent', () => {
  let component: TaskListCreateComponent;
  let fixture: ComponentFixture<TaskListCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskListCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
