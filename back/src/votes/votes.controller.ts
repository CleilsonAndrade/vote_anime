import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateVotesDto } from './dto/create-votes.dto';
import { VoteService } from './votes.service';

@Controller('vote')
export class VoteController {
  constructor(private readonly voteService: VoteService) { }

  @Post()
  create(@Body() createVotesDto: CreateVotesDto) {
    return this.voteService.create(createVotesDto);
  }

  @Get()
  findAll() {
    return this.voteService.findAll();
  }
}
