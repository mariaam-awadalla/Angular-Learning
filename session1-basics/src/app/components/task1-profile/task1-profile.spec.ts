import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task1Profile } from './task1-profile';

describe('Task1Profile', () => {
  let component: Task1Profile;
  let fixture: ComponentFixture<Task1Profile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Task1Profile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Task1Profile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
