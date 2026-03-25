import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task2NgforComponent } from './task2-ngfor';

describe('Task2Ngfor', () => {
  let component: Task2NgforComponent ;
  let fixture: ComponentFixture< Task2NgforComponent >;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ Task2NgforComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent( Task2NgforComponent );
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
