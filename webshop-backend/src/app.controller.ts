import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Render,
  Param,
} from '@nestjs/common';
import { DataSource } from 'typeorm';
import { AppService } from './app.service';
import RegisterDto from './dto/register.dto';
import { Product } from './entities/product/product.entity';
import { User } from './entities/user/user.entity';
import bcrypt from 'bcrypt';

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

  @Post('/register')
  @HttpCode(200)
  async register(@Body() registerDto: RegisterDto) {
    if (
      !registerDto.email ||
      !registerDto.password ||
      !registerDto.rePassword
    ) {
      throw new BadRequestException('All fields are required');
    }
    if (!registerDto.email.includes('@')) {
      throw new BadRequestException('Email must contain a @ character');
    }
    if (registerDto.password !== registerDto.rePassword) {
      throw new BadRequestException('The two passwords must match');
    }
    if (registerDto.password.length < 8) {
      throw new BadRequestException(
        'The password must be at least 8 characters long',
      );
    }

    const userRepo = this.dataSource.getRepository(User);
    const user = new User();
    user.email = registerDto.email;
    user.password = await bcrypt.hash(registerDto.password, 15);
    await userRepo.save(user);

    return user;
  }

  @Get('/shoes')
  async getShoes() {
    const productRepo = this.dataSource.getRepository(Product);
    return productRepo.find();
  }

  @Get('/shoes/:id')
  async getShoe(@Param('id') id: number) {
    const productRepo = this.dataSource.getRepository(Product);
    productRepo.find();
  }

  @Get('/shoes/:name')
  async getShoesByName(@Param('name') name: string) {
    const productRepo = this.dataSource.getRepository(Product);
    productRepo.find();
  }
}
