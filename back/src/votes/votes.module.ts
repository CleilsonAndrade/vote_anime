import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { VoteController } from './votes.controller';
import { VoteService } from './votes.service';

@Module({
  controllers: [VoteController, PrismaService],
  providers: [VoteService],
})
export class VoteModule { }
