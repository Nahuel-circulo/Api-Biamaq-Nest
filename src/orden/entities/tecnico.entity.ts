import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity({name:'TEC0002'})
export class Tecnico extends BaseEntity{


    @PrimaryGeneratedColumn('increment')
    IDTECNICO:number;

    @Column({
        type:'varchar'
    })
    NOMBRE:string;
    
    @Column({
        type:'varchar'
    })
    DOMICILIO:string;

    @Column({
        type:'varchar'
    })
    LOCALIDAD:string;

}