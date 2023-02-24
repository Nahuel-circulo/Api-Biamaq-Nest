import { Module } from '@nestjs/common';
import { OrdenService } from './orden.service';
import { OrdenController } from './orden.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Orden } from './entities/orden.entity';
import { Tecnico } from './entities/tecnico.entity';
import { Cliente } from './entities/cliente.entity';
import { Producto } from './entities/producto.entity';
import { Modelo } from './entities/modelo.entity';
import { Componente } from './entities/componente.entity';
import { Marca } from './entities/marca.entity';

@Module({
  controllers: [OrdenController],
  providers: [OrdenService],
  imports: [TypeOrmModule.forFeature([
    Orden,
    Tecnico,
    Cliente,
    Producto,
    Modelo, 
    Componente, 
    Marca
  ])],
  exports: [OrdenService, TypeOrmModule]
})
export class OrdenModule { }
