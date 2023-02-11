import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { AppService } from './app.service';
import { Product } from './entities/product.entity';
import { SizePrice } from './entities/sizePrice.entity';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private dataSource: DataSource,
  ) {}

  @Get()
  @Render('index')
  index() {
    return { message: 'Welcome to the homepage' };
  }

  @Get('api/cipok')
  async listCipok() {
    const cipoRepo = this.dataSource.getRepository(Product);
    return await cipoRepo.find();
  }

  @Post('api/cipok')
  newProduct(@Body() product: Product, @Body() sizePrice: SizePrice) {
    product.id = undefined;
    sizePrice.id = undefined;
    const productRepo = this.dataSource.getRepository(Product);
    const priceSizeRepo = this.dataSource.getRepository(SizePrice);
    productRepo.save(product);
    priceSizeRepo.save(sizePrice);
  }
}
