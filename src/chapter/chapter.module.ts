import { Module } from '@nestjs/common';
import { ChapterController } from './chapter.controller';
import { ChapterService } from './chapter.service';
import { ChapterShcema } from './schema/chapter.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Chapter', schema: ChapterShcema }]),
  ],
  controllers: [ChapterController],
  providers: [ChapterService],
})
export class ChapterModule {}
