import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Componente } from "./componente.entity";
import { Modelo } from "./modelo.entity";


@Entity({ name: 'TEC0008' })
export class Producto extends BaseEntity {

    @PrimaryColumn({
        type: 'varchar'
    })
    NROSERIE: string;

    @ManyToOne(() => Componente)
    @JoinColumn({name:'IDCOMPONENTE'})
    COMPONENTE: Componente;

    @ManyToOne(() => Modelo)
    @JoinColumn({name:'IDMODELO'})
    MODELO: Modelo;

    @Column({
        type: 'varchar'
    })
    OBSERVACIONES: string;

    @Column({
        type: 'varchar'
    })
    COLOR: string;

    @Column({
        type: 'int'
    })
    IDPROPIETARIO: number;


}