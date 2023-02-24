import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'TEC0001' })
export class Componente extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    IDCOMPONENTE: number;

    @Column({
        type: 'varchar'
    })
    DESCRIPCION: string;

}