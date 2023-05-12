/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Article {
  @Prop()
  hsCode: string;
  @Prop()
  hsNumber: number;
  @Prop()
  hsRoman: string;
  @Prop()
  type: string;
  @Prop()
  title: string;
  @Prop()
  description: string;
  @Prop()
  imposedBill: string;
  @Prop()
  source: string;
  @Prop()
  reference: string;
  @Prop()
  lastUpdated: string;
  @Prop()
  keywords: string;
  @Prop()           
  section: string;        
  @Prop()
  duty: any[];
  @Prop()
  referenceProduct: any[];
}

export const ArticleSchema = SchemaFactory.createForClass(Article);

