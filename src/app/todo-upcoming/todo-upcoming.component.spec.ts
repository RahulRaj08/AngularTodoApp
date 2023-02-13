import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoUpcomingComponent } from './todo-upcoming.component';

describe('TodoUpcomingComponent', () => {
  let component: TodoUpcomingComponent;
  let fixture: ComponentFixture<TodoUpcomingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoUpcomingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoUpcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
