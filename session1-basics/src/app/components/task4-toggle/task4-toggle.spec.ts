import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task4Toggle } from './task4-toggle';

describe('Task4Toggle', () => {
  let component: Task4Toggle;
  let fixture: ComponentFixture<Task4Toggle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Task4Toggle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Task4Toggle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
