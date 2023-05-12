/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema()
export class Section {
  @Prop()
  type: string;
  @Prop()
  title: string;
  @Prop()
  description: string;
  @Prop()
  moreInfo: string[];
  @Prop()
  imposedBill: string;
  @Prop()
  source: string;
  @Prop()
  reference: string;
  @Prop()
  lastUpdated: string;
  @Prop()         //{ type: mongoose.Schema.Types.ObjectId, ref: 'Chapter' }
  chapter: string;
}

export const SectionShcema = SchemaFactory.createForClass(Section);
