import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { AdminGrn } from './admin-grn/admin-grn';

@Component({
  selector: 'app-admin',
  imports: [CommonModule, MatTabsModule, AdminGrn],
  templateUrl: './admin.html',
  styleUrl: './admin.scss'
})
export class Admin {
  labelGRN = 'Tharidu';
}
