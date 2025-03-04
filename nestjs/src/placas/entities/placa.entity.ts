import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('placas')
export class Placa {
    // ID
    @PrimaryGeneratedColumn('uuid')
    id: string;

    // PLACA
    @Column('text', { unique: true })
    name?: string;

    // MARCA
    @Column('text')
    marca: string;

    // MODELO
    @Column('int')
    modelo: number;

    // COLOR
    @Column('text')
    color: string;

    // FECHA INGRESO
    @Column('date', {
        default: () => 'CURRENT_TIMESTAMP',
    })
    fecha_ingreso: Date;
}
