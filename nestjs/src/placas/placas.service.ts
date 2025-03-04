import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePlacaDto } from './dto/create-placa.dto';
import { UpdatePlacaDto } from './dto/update-placa.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Placa } from './entities/placa.entity';

@Injectable()
export class PlacasService {
  constructor(
    @InjectRepository(Placa)
    private placaRepository: Repository<Placa>,
  ) {}

  async create(createPlacaDto: CreatePlacaDto) {
    console.log(createPlacaDto);
    const newPlaca = this.placaRepository.create(createPlacaDto);
    await this.placaRepository.save(newPlaca);
    return newPlaca;
  }

  findAll() {
    const placas = this.placaRepository.find({});
    return placas;
  }

  findOne(id: string) {
    const placa = this.placaRepository.findOneBy({ id: id });
    return placa;
  }

  async update(id: string, updatePlacaDto: UpdatePlacaDto) {
    const product = await this.placaRepository.preload({
      id: id,
      ...updatePlacaDto,
    });
    if (!product) {
      throw new NotFoundException(`Placa #${id} not found`);
    }
    await this.placaRepository.save(product);
    return product;
  }

  remove(id: string) {
    const placa = this.findOne(id);
    this.placaRepository.delete({ id: id });
    return placa;
  }
}
