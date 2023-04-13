import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Componente } from "./componente.entity";
import { Modelo } from "./modelo.entity";


@Entity({ name: 'TEC0008' })
export class Producto extends BaseEntity {

    @PrimaryColumn({
        type: 'varchar'
    })
    NROSERIE: string;

    @ManyToOne(() => Componente,{eager:true})
    @JoinColumn({name:'IDCOMPONENTE'})
    COMPONENTE: Componente;

    @ManyToOne(() => Modelo,{eager:true})
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