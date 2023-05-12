import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { Article } from './schema/article.schema';
import { ArticleDto } from './dto/article.dto';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { SearchArticleDto } from './dto/search-article.dto';

@Controller('article')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  // search hs code   //http://localhost:3000/article?hsCode=9
  @Get()
  async searchHsCode(@Query() SearchArticleDto: SearchArticleDto) {
    const articles = await this.articleService.searchHsCode(SearchArticleDto);
    return { data: articles };
  }

  // get all data from the database   //http://localhost:3000/article
  @Get()
  async getAllArticles(): Promise<Article[]> {
    return this.articleService.findAll();
  }

  // Create table in database    //http://localhost:3000/article
  @Post()
  async createArticle(
    @Body()
    article: ArticleDto,
  ): Promise<Article> {
    return this.articleService.create(article);
  }

  // Get the data from database using unique id    //http://localhost:3000/article/645d2116d4b45ef3e993ab55
  @Get(':id')
  async getArticle(
    @Param('id')
    id: string,
  ): Promise<Article> {
    return this.articleService.findById(id);
  }

  // Update the data in database (id must match with database id)    //http://localhost:3000/article/645d2116d4b45ef3e993ab55
  @Put(':id')
  async updateArticle(
    @Param('id')
    id: string,
    @Body()
    article: ArticleDto,
  ): Promise<Article> {
    return this.articleService.updateById(id, article);
  }

  // Delete the table from the database    //http://localhost:3000/article/645d2116d4b45ef3e993ab55
  @Delete(':id')
  async deleteArticle(
    @Param('id')
    id: string,
  ): Promise<Article> {
    return this.articleService.deleteById(id);
  }
}
