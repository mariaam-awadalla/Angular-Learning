import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task3StoresComponent } from './task3-stores';

describe('Task3Stores', () => {
  let component: Task3StoresComponent;
  let fixture: ComponentFixture<Task3StoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Task3StoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Task3StoresComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
