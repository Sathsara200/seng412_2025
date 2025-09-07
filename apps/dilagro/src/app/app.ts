import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';




@Component({
  imports: [RouterModule, CommonModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  name = "Sathsara";
  frameworks = ['Angular', 'React', 'Vue'];

  onClick() {
    this.name = "Tharidu"
  }
}
