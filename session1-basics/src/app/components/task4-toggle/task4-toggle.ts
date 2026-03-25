import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task4-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task4-toggle.html'
})
export class Task4ToggleComponent {

  stores = [
    {
      name: 'H&M',
      imgUrl: 'https://picsum.photos/200/300',
      branches: ['Cairo','Alex'],
      show: false
    },
    {
      name: 'Zara',
      imgUrl: 'https://picsum.photos/200/300',
      branches: ['Giza','Mansoura'],
      show: false
    }
  ];

  toggle(store: any) {
    store.show = !store.show;
  }

}