import { Placa } from "./entities/placa.entity";

export interface PlacaInterface {
    id:string;
    name:string;
    marca:string;
    modelo:number;
    color:string;
    fecha_ingreso:Date;
}

let placas:PlacaInterface[]=[
    {
        id:"1",
        name:"AMG G 63",
        marca:"Mercedes-Benz",
        modelo:2022,
        color:'Negro',
        fecha_ingreso:new Date(),
    },
    {
        id:"2",
        name:"Clio",
        marca:"Renault",
        modelo:1998,
        color:'Blanco',
        fecha_ingreso:new Date(),
    },
    
]
export default placas;