import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task3-stores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task3-stores.html',
  styleUrl: './task3-stores.css'
})
export class Task3StoresComponent {

  stores = [
    {
      name: 'H&M',
      imgUrl: 'https://picsum.photos/200/300',
      branches: ['Cairo','Alex']
    },
    {
      name: 'Zara',
      imgUrl: 'https://picsum.photos/200/300',
      branches: ['Giza','Mansoura']
    }
  ];

}