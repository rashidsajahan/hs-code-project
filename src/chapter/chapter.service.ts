import { Injectable, NotFoundException } from '@nestjs/common';
import { Chapter } from './schema/chapter.schema';
import * as mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ChapterService {
  constructor(
    @InjectModel(Chapter.name)
    private chapterModel: mongoose.Model<Chapter>,
  ) {}

  async findAll(): Promise<Chapter[]> {
    const chapters = await this.chapterModel.find();
    return chapters;
  }

  async create(chapter: Chapter): Promise<Chapter> {
    const res = await this.chapterModel.create(chapter);
    return res;
  }

  async findById(id: string): Promise<Chapter> {
    const chapter = await this.chapterModel.findById(id);

    if (!chapter) {
      throw new NotFoundException('Chapter not found.');
    }

    return chapter;
  }

  async updateById(id: string, chapter: Chapter): Promise<Chapter> {
    return await this.chapterModel.findByIdAndUpdate(id, chapter, {
      new: true,
      runValidators: true,
    });
  }

  async deleteById(id: string): Promise<Chapter> {
    return await this.chapterModel.findByIdAndDelete(id);
  }
}
