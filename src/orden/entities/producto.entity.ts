import { BaseEntity, Entity } from "typeorm";


@Entity({ name: 'TEC0008' })
export class Producto extends BaseEntity {


    NROSERIE: string;

    IDCOMPONENTE: number;

    IDMODELO: number;

    OBSERVACIONES: string;

    COLOR: string;

    IDPROPIETARIO: number;


}