import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Cliente } from './cliente.entity';
import { Producto } from './producto.entity';
import { Tecnico } from './tecnico.entity';

@Entity({ name: 'TEC0011' })
export class Orden extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    NROORDEN: number;

    @Column({
        type: 'varchar'
    })
    PRIORIDAD: string;


    @Column({
        type: 'varchar'
    })
    ESTADO: string;


    @Column({
        type: 'varchar'
    })
    DESCRIPCIONFALLA: string;


    @Column({
        type: 'varchar'
    })
    DESCRIPCIONREPARACION: string;


    @ManyToOne(() => Cliente)
    @JoinColumn({name:'IDCLIENTE'})
    CLIENTE: Cliente;


    @ManyToOne(() => Tecnico)
    @JoinColumn({name:'IDTECNICO'})
    TECNICO: Tecnico;


    @Column({
        type: 'float'
    })
    TOTAL: number;


    @ManyToOne(() => Producto)
    @JoinColumn({name:'NROSERIECOMPONENTE'})
    INFO_COMPONENTE: Producto;


    @Column({
        type: 'datetime'
    })
    FECHAINGRESO: string;


    @Column({
        type: 'datetime'
    })
    FECHAEGRESO: string;


    @Column({
        type: 'datetime'
    })
    FECHAPROMETIDA: string;


    @Column({
        type: 'datetime'
    })
    FECHAREPARACION: string;
}

