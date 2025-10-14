import { Module } from '@nestjs/common';
import { DailyStockModule } from './daily-stock/ho/seng412_2025/dilagro-api/src/app/daily-stock.module';

@Module({
  imports: [DailyStockModule],
})
export class AppModule {}
