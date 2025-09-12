import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppService } from 'apps/dilagro/src/app/services/app/app';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-admin-grn',
  imports: [CommonModule, MatButtonModule],
  templateUrl: './admin-grn.html',
  styleUrl: './admin-grn.scss'
})
export class AdminGrn {
  @Input({ required: true }) label!: string;
  @Output() update = new EventEmitter<string>();

  constructor(private appService: AppService) { }
}

