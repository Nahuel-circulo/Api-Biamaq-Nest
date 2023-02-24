import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Orden } from './entities/orden.entity';
import { Tecnico } from './entities/tecnico.entity';

@Injectable()
export class OrdenService {

  constructor(

    @InjectRepository(Orden)
    private readonly ordenRepository: Repository<Orden>,

    @InjectRepository(Tecnico)
    private readonly tecnicosRepository: Repository<Orden>

  ) { }

  async findAll() {



    const ordenes = await this.ordenRepository.find({
      take: 10,
      relations: {
        TECNICO: true,
        CLIENTE: true,
        INFO_COMPONENTE: {
          MODELO: {
            MARCA: true
          },
          COMPONENTE: true
        },

      }
    })
    /* const {IDTECNICO} = ordenes[0];

    const tecnico = await this.tecnicosRepository.find({where:{
      IDTECNICO
    }})

    console.log(tecnico) */

    return ordenes;
  }

  findOne(id: number) {
    return `This action returns a #${id} orden`;
  }


}
