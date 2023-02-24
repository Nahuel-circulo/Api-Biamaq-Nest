import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'TEC0006' })
export class Marca extends BaseEntity {


    @PrimaryGeneratedColumn('increment')
    IDMARCA: number;

    @Column({
        type: 'varchar'
    })
    DESCRIPCION: string;

}