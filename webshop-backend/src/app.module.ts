import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from './entities/address.entity';
import { Admin } from './entities/admin.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Product } from './entities/product.entity';
import { SizePrice } from './entities/sizePrice.entity';
import { User } from './entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      username: 'root',
      password: '',
      database: 'webshop',
      entities: [User, Address, Product, SizePrice, Admin],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
