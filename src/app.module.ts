import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdenModule } from './orden/orden.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type:'mssql',
      host:'biamaq.infolabchaco.com.ar',
      port:42500,
      database:process.env.DB_NAME,
      username:process.env.DB_USERNAME,
      password:process.env.DB_PASSWORD,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      autoLoadEntities:true,
      options:{
        encrypt:false
      }
    }),
    OrdenModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
