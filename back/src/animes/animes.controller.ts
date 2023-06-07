import { Controller, Get } from '@nestjs/common';
import { AnimesService } from './animes.service';
// import { CreateAnimeDto } from './dto/create-anime.dto';
// import { UpdateAnimeDto } from './dto/update-anime.dto';

@Controller('animes')
export class AnimesController {
  constructor(private readonly animesService: AnimesService) { }

  @Get()
  findRank() {
    return this.animesService.findAll();
  }

  @Get('rank')
  findAll() {
    return this.animesService.findRank();
  }
}
