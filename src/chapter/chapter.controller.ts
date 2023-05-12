import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Chapter } from './schema/chapter.schema';
import { ChapterService } from './chapter.service';
import { CreateChapterDto } from './dto/create-chapter.dto';

@Controller('chapter')
export class ChapterController {
  constructor(private chapterService: ChapterService) {}

  // get all data from the database   //http://localhost:3000/chapter
  @Get()
  async getAllChapters(): Promise<Chapter[]> {
    return this.chapterService.findAll();
  }

  // Create table in database   //http://localhost:3000/chapter
  @Post()
  async createChapter(
    @Body()
    chapter: CreateChapterDto,
  ): Promise<Chapter> {
    return this.chapterService.create(chapter);
  }

  // Get the data from database using unique id   //http://localhost:3000/chapter/645d23f7d4b45ef3e993ab5f
  @Get(':id')
  async getChapter(
    @Param('id')
    id: string,
  ): Promise<Chapter> {
    return this.chapterService.findById(id);
  }

  // Update the data in database (id must match with database id)   //http://localhost:3000/chapter/645d23f7d4b45ef3e993ab5f
  @Put(':id')
  async updateChapter(
    @Param('id')
    id: string,
    @Body()
    chapter: CreateChapterDto,
  ): Promise<Chapter> {
    return this.chapterService.updateById(id, chapter);
  }

  // Delete the table from the database   //http://localhost:3000/chapter/645d23f7d4b45ef3e993ab5f
  @Delete(':id')
  async deleteChapter(
    @Param('id')
    id: string,
  ): Promise<Chapter> {
    return this.chapterService.deleteById(id);
  }
}
