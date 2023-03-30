import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Render,
  Param,
  Res,
  Req,
  UnauthorizedException,
} from '@nestjs/common';
import { DataSource } from 'typeorm';
import { AppService } from './app.service';
import RegisterDto from './dto/register.dto';
import { Product } from './entities/product/product.entity';
import { User } from './entities/user/user.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Response, Request } from 'express';
import { Release } from './entities/product/release.entity';
import CartDto from './dto/cart.dto';
import { ShoppingCartItem } from './entities/cart/shoppingCartItem.entity';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private dataSource: DataSource,
    private jwtService: JwtService,
  ) {}

  @Get()
  @Render('index')
  index() {
    return { message: 'Welcome to the homepage' };
  }

  @Post('/register')
  @HttpCode(200)
  async register(@Body() registerDto: RegisterDto) {
    console.log(registerDto);
    const userRepo = this.dataSource.getRepository(User);
    const user = new User();
    user.username = registerDto.username;
    user.email = registerDto.email;
    user.password = await bcrypt.hash(registerDto.password, 15);
    await userRepo.save(user);

    return user;
  }


  @Post('/login')
  async login(
    @Body() loginDto: RegisterDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    const userRepo = this.dataSource.getRepository(User);
    let user = await userRepo.findOneBy({ email: loginDto.identifier });
    if (!user) {
      user = await userRepo.findOneBy({ username: loginDto.identifier });
    }
    if (!user) {
      throw new BadRequestException('invalid credentials');
    }
    if (!(await bcrypt.compare(loginDto.password, user.password))) {
      throw new BadRequestException('Wrong password');
    }
  
    const jwt = await this.jwtService.signAsync({ id: user.id });
  
    response.cookie('jwt', jwt, { httpOnly: true });
  
    return {
      message: 'success',
      accessToken: jwt,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
    };
  }
  @Get('/user')
  async user(@Req() request: Request) {
    try {
      const cookie = request.cookies['jwt'];

      const data = await this.jwtService.verifyAsync(cookie);

      if (!data) {
        throw new UnauthorizedException();
      }

      //const user = await this.appService.findOne({ id: data['id'] });

      //return user;
    } catch (e) {
      throw new UnauthorizedException();
    }
  }

  @Get('/shoes')
  async getShoes() {
    const productRepo = this.dataSource.getRepository(Product);
    return productRepo
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.category', 'category')
      .getMany();
  }

  @Get('/releases')
  async getReleases() {
    const productRepo = this.dataSource.getRepository(Release);
    return productRepo.createQueryBuilder('release').getMany();
  }


  @Get('/shoes/popular')
  async getPopularShoes() {
    const productRepo = this.dataSource.getRepository(Product);
    return productRepo
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.category', 'category')
      .where('product.popular = :popular', { popular: true })
      .getMany();
  }

  @Get('/shoes/:id')
  async getShoe(@Param('id') id: number) {
    const productRepo = this.dataSource.getRepository(Product);
    const product = await productRepo.findOne({
      where: { id: id },
      relations: ['category'],
    });
    return product;
  }

  @Get('/shoes/name/:name')
  async getShoesByName(@Param('name') name: string) {
    const productRepo = this.dataSource.getRepository(Product);
    const shoes = await productRepo
      .createQueryBuilder('product')
      .where('product.name LIKE :name', { name: `%${name}%` })
      .getMany(); 
    return shoes;
  }
  @Get('/shoes/category/:id')
  async getShoeByCategory(@Param('id') id: number) {
    const productRepo = this.dataSource.getRepository(Product);
    const products = await productRepo
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.category', 'category')
      .where('category.id = :id', { id })
      .getMany();
    return products;
  }

  @Get('/shoes/category/:name')
  async getShoeByCategoryName(@Param('name') name: string) {
    const productRepo = this.dataSource.getRepository(Product);
    const products = await productRepo
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.category', 'category')
      .where('category.name LIKE :name', { name: `%${name}%` })
      .getMany();
    return products;
  }

  @Get('/users')
  async getUsers() {
    const productRepo = this.dataSource.getRepository(User);
    return productRepo.find();
  }

  @Get('/user/:id')
  async getUser(@Param('id') id: number) {
    const productRepo = this.dataSource.getRepository(User);
    return productRepo.findOneBy({ id: id });
  }

  @Get('/users/username/:name')
  async getUsersByName(@Param('name') name: string) {
    const productRepo = this.dataSource.getRepository(User);
    return productRepo.findOneBy({ username: name });
  }

  @Get('/users/email/:email')
  async getUsersByEmail(@Param('email') email: string) {
    const productRepo = this.dataSource.getRepository(User);
    return productRepo.findOneBy({ email: email });
  }

  @Post('/cart')
  @HttpCode(200)
  async addToCart(@Body() cartDto: CartDto) {
    const cartRepo = this.dataSource.getRepository(ShoppingCartItem);
    const cart = new ShoppingCartItem();
    cart.product = cartDto.productId;
    cart.quantity = cartDto.quantity;
    cart.size = cartDto.sizeId;
    cart.user = cartDto.userId;
    await cartRepo.save(cart)

    return cart;
  }

  @Get('/cart/:id')
  async getCartById(@Param('id') id: number) {
    const cartRepo = this.dataSource.getRepository(ShoppingCartItem);

    return cartRepo.findOneBy({ id: id });
    

  }

}
