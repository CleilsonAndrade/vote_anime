import { PartialType } from '@nestjs/mapped-types';
import { CreateVotesDto } from './create-votes.dto';

export class UpdateVotesDto extends PartialType(CreateVotesDto) {}
