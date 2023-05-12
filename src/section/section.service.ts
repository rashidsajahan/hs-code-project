import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Section } from './schema/section.schema';

@Injectable()
export class SectionService {
  constructor(
    @InjectModel(Section.name)
    private sectionModel: mongoose.Model<Section>,
  ) {}

  async findAll(): Promise<Section[]> {
    const sections = await this.sectionModel.find();
    return sections;
  }

  async create(section: Section): Promise<Section> {
    const res = await this.sectionModel.create(section);
    return res;
  }

  async findById(id: string): Promise<Section> {
    const section = await this.sectionModel.findById(id);

    if (!section) {
      throw new NotFoundException('Section not found.');
    }

    return section;
  }

  async updateById(id: string, section: Section): Promise<Section> {
    return await this.sectionModel.findByIdAndUpdate(id, section, {
      new: true,
      runValidators: true,
    });
  }

  async deleteById(id: string): Promise<Section> {
    return await this.sectionModel.findByIdAndDelete(id);
  }
}
