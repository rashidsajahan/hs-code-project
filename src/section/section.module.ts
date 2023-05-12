import { Module } from '@nestjs/common';
import { SectionController } from './section.controller';
import { SectionService } from './section.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SectionShcema } from './schema/section.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Section', schema: SectionShcema }]),
  ],
  controllers: [SectionController],
  providers: [SectionService],
})
export class SectionModule {}
