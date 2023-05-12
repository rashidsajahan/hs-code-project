import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChapterModule } from './chapter/chapter.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SectionModule } from './section/section.module';
import { ArticleModule } from './article/article.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://rashidsajahan:dx4IRlQ5hmWKctzO@cluster0.ive7wdi.mongodb.net/?retryWrites=true&w=majority',
    ),
    ChapterModule,
    SectionModule,
    ArticleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
