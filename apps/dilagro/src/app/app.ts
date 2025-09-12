import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AppService } from './services/app/app';




@Component({
  imports: [RouterModule, CommonModule, MatProgressBarModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  constructor(protected appService: AppService) { }
}