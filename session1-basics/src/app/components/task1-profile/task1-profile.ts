import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task1-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task1-profile.html',
  styleUrl: './task1-profile.css'
})
export class Task1ProfileComponent {

  profile = {
    name: 'Menna',
    image: 'https://picsum.photos/300/200',
    town: 'Cairo'
  };

}