import { IsNumber, IsString, MaxLength } from "class-validator";

export class CreatePlacaDto {

    // placa
    @IsString()
    @MaxLength(10)
    readonly placa: string;

    // marca
    @IsString()
    @MaxLength(50)
    readonly  marca: string;

    // modelo
    @IsString()
    readonly modelo: number;

    //color
    @IsString()
    @MaxLength(30)
    readonly  color: string;

    //fecha_ingreso
    fecha_ingreso: Date;
}
