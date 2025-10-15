import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export interface IDailyStock {
    date: Date;
    amount: number;
}

@Schema()
export class DailyStock implements IDailyStock {
    @Prop() date: Date;
    @Prop() amount: number;
}

export type CatDocument = HydratedDocument<DailyStock>;
export const DailyStockSchema = SchemaFactory.createForClass(DailyStock);