import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Article } from './schema/article.schema';
import mongoose from 'mongoose';
import { SearchArticleDto } from './dto/search-article.dto';

@Injectable()
export class ArticleService {
  constructor(
    @InjectModel(Article.name)
    private articleModel: mongoose.Model<Article>,
  ) {}

  //search for hscode
  async searchHsCode(searchArticleDto: SearchArticleDto): Promise<Article[]> {
    const query = this.articleModel.find();
    if (searchArticleDto.hsCode) {
      const regex = new RegExp(`^${searchArticleDto.hsCode}`);
      query.where('hsCode', { $regex: regex });
    }
    return query.exec();
  }

  async findAll(): Promise<Article[]> {
    const articles = await this.articleModel.find();
    return articles;
  }

  async create(article: Article): Promise<Article> {
    const res = await this.articleModel.create(article);
    return res;
  }

  async findById(id: string): Promise<Article> {
    const article = await this.articleModel.findById(id);

    if (!article) {
      throw new NotFoundException('article not found.');
    }

    return article;
  }

  async updateById(id: string, article: Article): Promise<Article> {
    return await this.articleModel.findByIdAndUpdate(id, article, {
      new: true,
      runValidators: true,
    });
  }

  async deleteById(id: string): Promise<Article> {
    return await this.articleModel.findByIdAndDelete(id);
  }
}
