/* eslint-disable prettier/prettier */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
  timestamps: true,
})
export class Chapter {
  @Prop()
  type: string;

  @Prop()
  hsChapterNumber: number;

  @Prop()
  hsChapterRoman: string;

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
}

export const ChapterShcema = SchemaFactory.createForClass(Chapter);
