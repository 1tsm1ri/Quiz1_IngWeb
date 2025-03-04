import { Module } from '@nestjs/common';
import { PlacasService } from './placas.service';
import { PlacasController } from './placas.controller';
import { Placa } from './entities/placa.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [PlacasController],
  providers: [PlacasService],
  imports: [TypeOrmModule.forFeature([Placa])],
  exports: [TypeOrmModule],
})
export class PlacasModule {}
