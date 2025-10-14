import { Component } from '@angular/core';
import { DailyStock } from 'apps/dilagro/src/app/services/app/daily-stock';

@Component({
  selector: 'app-admin-daily',
  templateUrl: './admin-daily.html',
  styleUrl: './admin-daily.scss'
})
export class AdminDaily {
  constructor(private dailyStock: DailyStock) { }
}
