import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlacasService } from './placas.service';
import { CreatePlacaDto } from './dto/create-placa.dto';
import { UpdatePlacaDto } from './dto/update-placa.dto';

@Controller('placas')
export class PlacasController {
  constructor(private readonly placasService: PlacasService) {}

  @Post() // Crear
  create(@Body() createPlacaDto: CreatePlacaDto) {
    return this.placasService.create(createPlacaDto);
  }

  @Get() // Obtener
  findAll() {
    return this.placasService.findAll();
  }

  @Get(':id') // /placas/1
  findOne(@Param('id') id: string) {
    return this.placasService.findOne(id);
  }

  @Patch(':id') // Actualizar (Datos espesificos)
  update(@Param('id') id: string, @Body() updatePlacaDto: UpdatePlacaDto) {
    return this.placasService.update(id, updatePlacaDto);
  }

  @Delete(':id') // /placas/1/aojoi1j2eoi1j2e12e
  remove(@Param('id') id: string) {
    return this.placasService.remove(id);
  }
}
