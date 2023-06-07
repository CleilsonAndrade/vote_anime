import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AnimesService {
  constructor(private prisma: PrismaService) { }

  findAll() {
    return this.prisma.anime.findMany();
  }

  async findRank() {
    const votes = await this.prisma.votes.groupBy({
      by: ['animeID'],
      _count: { animeID: true },
      orderBy: {
        _count: {
          animeID: 'desc',
        },
      },
    });

    return Promise.all(
      votes.map(async (vote) => {
        const anime = await this.prisma.anime.findFirst({
          where: { id: vote.animeID },
        });

        return {
          anime,
          votes: vote._count.animeID,
        };
      }),
    );
  }
}
