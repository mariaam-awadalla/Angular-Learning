import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  Task1ProfileComponent } from './components/task1-profile/task1-profile';
import {  Task2NgforComponent } from './components/task2-ngfor/task2-ngfor';
import {  Task3StoresComponent } from './components/task3-stores/task3-stores';
import {  Task4ToggleComponent } from './components/task4-toggle/task4-toggle';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    Task1ProfileComponent,
    Task2NgforComponent,
    Task3StoresComponent,
    Task4ToggleComponent
  ],
  templateUrl: '../app/app.html',
})
export class AppComponent {
  current = 'task1';
}