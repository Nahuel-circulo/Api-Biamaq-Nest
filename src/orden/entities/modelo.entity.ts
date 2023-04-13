import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Marca } from './marca.entity';


@Entity({ name: 'TEC0007' })
export class Modelo extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    IDMODELO: number;

    @Column({ type: 'varchar' })
    DESCRIPCION: string;

    @ManyToOne(() => Marca,{eager:true})
    @JoinColumn({name:'IDMARCA'})
    MARCA: Marca;
}