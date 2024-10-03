import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ProductModule } from './product/product.module'
import { ConfigModule } from '@nestjs/config'
import { Product } from './product/entities/product.entity'

@Module({
  imports: [ConfigModule.forRoot(),
  TypeOrmModule.forRoot(
    {
      url: process.env.DATABASE_URL,
      type: 'postgres',
      port: 3306,
      entities: [Product],
      synchronize: true,
    }
  ),
    ProductModule
  ],
  controllers: [AppController],
  providers: [AppService],
  exports:[ConfigModule]
})
export class AppModule { }
