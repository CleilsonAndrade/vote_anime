import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { AnimesController } from './animes.controller';
import { AnimesService } from './animes.service';

@Module({
  controllers: [AnimesController],
  providers: [AnimesService, PrismaService],
})
export class AnimesModule { }
