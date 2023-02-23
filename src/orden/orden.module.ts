import { Module } from '@nestjs/common';
import { OrdenService } from './orden.service';
import { OrdenController } from './orden.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Orden } from './entities/orden.entity';
import { Tecnico } from './entities/tecnico.entity';
import { Cliente } from './entities/cliente.entity';

@Module({
  controllers: [OrdenController],
  providers: [OrdenService],
  imports: [TypeOrmModule.forFeature([
    Orden,
    Tecnico,
    Cliente
  ])],
  exports: [OrdenService, TypeOrmModule]
})
export class OrdenModule { }
