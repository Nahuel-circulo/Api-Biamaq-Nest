import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'FACT0004' })
export class Cliente extends BaseEntity {


    @PrimaryGeneratedColumn('increment')
    NUMERO: number;

    @Column({
        type: 'varchar'
    })
    NOMBRE: string;

    @Column({
        type: 'varchar'
    })
    DOMICILIO: string;

    @Column({
        type: 'varchar'
    })
    LOCALIDAD: string;

    @Column({
        type: 'varchar'
    })
    TELEFONO: string;

    @Column({
        type: 'varchar'
    })
    E_MAIL: string;

    @Column({
        type: 'varchar'
    })
    TIPO_DOC: string;

    @Column({
        type: 'varchar'
    })
    NRO_DOC: string;


}