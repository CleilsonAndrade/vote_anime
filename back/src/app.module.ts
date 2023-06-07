import { Module } from '@nestjs/common';
import { AnimesModule } from './animes/animes.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VoteModule } from './votes/votes.module';

@Module({
  imports: [AnimesModule, VoteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
