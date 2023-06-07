import { IsEmail, IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class CreateVotesDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  animeID: number;
}
