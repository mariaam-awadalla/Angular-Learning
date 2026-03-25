import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task2-ngfor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task2-ngfor.html'
})
export class Task2NgforComponent {

  skills = ['HTML', 'CSS', 'JS'];

}