import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { SectionService } from './section.service';
import { Section } from './schema/section.schema';
import { SectionDto } from './dto/section.dto';

@Controller('section')
export class SectionController {
  constructor(private sectionService: SectionService) {}

  // get all data from the database   //http://localhost:3000/section
  @Get()
  async getAllSections(): Promise<Section[]> {
    return this.sectionService.findAll();
  }

  // Create table in database   //http://localhost:3000/section
  @Post()
  async createSection(
    @Body()
    section: SectionDto,
  ): Promise<Section> {
    return this.sectionService.create(section);
  }

  // Get the data from database using unique id   //http://localhost:3000/section/645d2306d4b45ef3e993ab5b
  @Get(':id')
  async getSection(
    @Param('id')
    id: string,
  ): Promise<Section> {
    return this.sectionService.findById(id);
  }

  // Update the data in database (id must match with database id)   //http://localhost:3000/section/645d2306d4b45ef3e993ab5b
  @Put(':id')
  async updateSection(
    @Param('id')
    id: string,
    @Body()
    section: SectionDto,
  ): Promise<Section> {
    return this.sectionService.updateById(id, section);
  }

  // Delete the table from the database   //http://localhost:3000/section/645d2306d4b45ef3e993ab5b
  @Delete(':id')
  async deleteSection(
    @Param('id')
    id: string,
  ): Promise<Section> {
    return this.sectionService.deleteById(id);
  }
}
