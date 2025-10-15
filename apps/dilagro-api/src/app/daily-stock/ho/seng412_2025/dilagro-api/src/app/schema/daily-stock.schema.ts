import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IDailyStock } from '@SENG412_2025/model';
import { HydratedDocument } from "mongoose";

@Schema()

export class DailyStock implements IDailyStock {
    @Prop() date: Date;
    @Prop() amount: number
}

export type CatDocument = HydratedDocument<DailyStock>;
export const DailyStockSchema = SchemaFactory.createForClass(DailyStock);