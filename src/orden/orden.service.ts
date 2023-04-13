import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Orden } from './entities/orden.entity';
import { Tecnico } from './entities/tecnico.entity';

@Injectable()
export class OrdenService {

  constructor(

    @InjectRepository(Orden)
    private readonly ordenRepository: Repository<Orden>

  ) { }

  async findAll() {



    const ordenes = await this.ordenRepository.find({
      take: 10,
      //sin activar el eager en las entidades se puede cargar las relaciones asi
      // pero solo en el find
      /* relations: {
        TECNICO: true,
        CLIENTE: true,
        INFO_COMPONENTE: {
          MODELO: {
            MARCA: true
          },
          COMPONENTE: true
        },

      } */
    })
    return ordenes;
  }

  async findOne(id: number) {
    const orden = await this.ordenRepository.findOneBy({ NROORDEN: id })

    if (!orden)
      throw new NotFoundException(`Orden de reparacion con numero ${id} no existe`);


    return orden


  }


}
