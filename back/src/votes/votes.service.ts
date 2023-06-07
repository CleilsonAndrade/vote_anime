import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateVotesDto } from './dto/create-votes.dto';

@Injectable()
export class VoteService {
  constructor(private prisma: PrismaService) { }

  create(data: CreateVotesDto) {
    return this.prisma.votes.upsert({
      where: { email: data.email },
      update: { animeID: data.animeID },
      create: data,
    });
  }

  findAll() {
    return this.prisma.votes.findMany({
      take: 5,
      orderBy: { id: 'asc' },
      include: {
        anime: {
          select: {
            title: true,
            url: true,
            votes: true,
          },
        },
      },
    });
  }
}
