/* eslint-disable prettier/prettier */
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
  Delete,
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
import { Size } from './entities/product/size.entity';
import LikeDto from './dto/like.dto';
import { Like } from './entities/user/like.entity';
import OrderItemDto from './dto/orderItem.dto';
import { Order } from './entities/order/order.entity';
import { OrderItem } from './entities/order/orderItem.entity';
import { ShippingMethod } from './entities/order/shippingMethod.entity';
import { PaymentMethod } from './entities/order/paymentMethod.entity';
import AddressDto from './dto/address.dto';
import { Address } from './entities/user/address.entity';
import OrderDto from './dto/order.dto';
import { Stock } from './entities/product/stock.entity';

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
      .leftJoinAndSelect('product.sizes', 'size')
      .where('product.inactive = :inactive', { inactive: 0 })
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
    .where('product.popular = :popular and product.inactive = :inactive', { popular: true, inactive: 0 })
    .getMany();
}

  @Get('/shoes/:id')
  async getShoe(@Param('id') id: number) {
    const productRepo = this.dataSource.getRepository(Product);
    const product = await productRepo.findOne({
      where: { id: id },
      relations: ['category', 'sizes'],
    });
    return product;
  }

  @Get('/shoes/name/:name')
  async getShoesByName(@Param('name') name: string) {
    const productRepo = this.dataSource.getRepository(Product);
    const shoes = await productRepo
      .createQueryBuilder('product')
      .where('product.name LIKE :name and product.inactive = :inactive', { name: `%${name}%`, inactive: 0 })
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
    cart.product = await this.dataSource.getRepository(Product).findOneBy({ id: cartDto.productId });
    cart.quantity = cartDto.quantity;
    cart.size = await this.dataSource.getRepository(Size).findOneBy({ id: cartDto.sizeId });
    cart.user = await this.dataSource.getRepository(User).findOneBy({ id: cartDto.userId });
    await cartRepo.save(cart);

    return cart;
  }

  @Get('/cart/:userId')
  async getCartItemsByUserId(@Param('userId') userId: number) {
    const cartRepo = this.dataSource.getRepository(ShoppingCartItem);

    return cartRepo.findBy({ userId: userId });
    
  }

  @Post('/like')
  @HttpCode(200)
  async addToLike(@Body() LikeDto: LikeDto){
    const likeRepo = this.dataSource.getRepository(Like);
    const like = new Like();
    like.product = await this.dataSource.getRepository(Product).findOneBy({id: LikeDto.productId});
    like.user = await this.dataSource.getRepository(User).findOneBy({id: LikeDto.userId});
    await likeRepo.save(like);
    return like;
  }

  @Delete('/like/:productId/:userId')
  async deleteLikeByProductId(@Param('productid') productId: number, @Param('userId') userId: number){
    const likeRepo = this.dataSource.getRepository(Like);
    const like = await likeRepo.findOne({
      where: { productId, userId },
    });
    return likeRepo.delete(like);
  }

  @Get('/like/product/:id')
  async getLikesByProductId(@Param('id') id: number){
    const likeRepo = this.dataSource.getRepository(Like);
    return likeRepo.findBy({ productId: id});
  }

  @Get('/like/user/:id')
  async getLikesByUserId(@Param('id') id: number){
    const likeRepo = this.dataSource.getRepository(Like);
    return likeRepo.findBy({ userId: id});
  }

  @Post('orderitem')
  @HttpCode(200)
  async addOrderItem(@Body() OrderItemDto: OrderItemDto){
    const orderItemRepo = this.dataSource.getRepository(OrderItem);
    const orderItem = new OrderItem();
    orderItem.product = await this.dataSource.getRepository(Product).findOneBy({ id: OrderItemDto.productId });
    orderItem.quantity = OrderItemDto.quantity;
    orderItem.size = await this.dataSource.getRepository(Size).findOneBy({ id: OrderItemDto.sizeId });
    orderItem.user = await this.dataSource.getRepository(User).findOneBy({ id: OrderItemDto.userId });
    orderItem.order = await this.dataSource.getRepository(Order).findOneBy({ id: OrderItemDto.orderId })
    await orderItemRepo.save(orderItem);
    return orderItem;
  }

  @Get('orderitem/:id')
  getOrderItemsById(@Param('id') id: number) {
    const orderItemRepo = this.dataSource.getRepository(OrderItem);
    return orderItemRepo.findBy({ orderId: id });
  }

  @Get('shippingmethod')
  getShippingMethods(){
    const shippingRepository = this.dataSource.getRepository(ShippingMethod);
    return shippingRepository.find();
  }
  
  @Get('shippingmethod/:id')
  getShippingMethodById(@Param('id') id: number){
    const shippingRepository = this.dataSource.getRepository(ShippingMethod);
    return shippingRepository.findOneBy({ id: id });
  }

  @Get('paymentmethod')
  getPaymentMethods(){
    const paymentRepository = this.dataSource.getRepository(PaymentMethod);
    return paymentRepository.find();
  }

  @Get('paymentmethod/:id')
  getPaymentMethodById(@Param('id') id: number){
    const paymentRepository = this.dataSource.getRepository(PaymentMethod);
    return paymentRepository.findOneBy({ id: id });
  }

  @Post('address')
  @HttpCode(200)
  async addAddress(@Body() AddressDto: AddressDto){
    const addressRepo = this.dataSource.getRepository(Address);
    const address = new Address();
    address.city = AddressDto.city;
    address.postalCode = AddressDto.postalCode;
    address.state = AddressDto.state;
    address.streetAddress = AddressDto.streetAddress;
    addressRepo.save(address);
    return address;
  }

  @Get('address/:id')
  getAddressById(@Param('id') id: number){
    const addressRepo = this.dataSource.getRepository(Address);
    return addressRepo.findOneBy({ id: id });
  }

  @Post('order')
  @HttpCode(200)
  async addOrder(@Body() OrderDto: OrderDto){
    const orderRepo = this.dataSource.getRepository(Order);
    const order = new Order();
    order.address = await this.dataSource.getRepository(Address).findOneBy({ id: OrderDto.addressId });
    order.paymentMethod = await this.dataSource.getRepository(PaymentMethod).findOneBy({ id: OrderDto.paymentMethod });
    order.shippingMethod = await this.dataSource.getRepository(ShippingMethod).findOneBy({ id: OrderDto.shippingMethod });
    order.user = await this.dataSource.getRepository(User).findOneBy({ id: OrderDto.userId });
    order.orderDate = new Date();
    orderRepo.save(order);
    return order;
  }
  
  @Get('stock/:productId')
  getStocks(@Param('productId') productId : number){
    const stockRepo = this.dataSource.getRepository(Stock);
    return stockRepo.findBy({ productId : productId});
  }
  
}
