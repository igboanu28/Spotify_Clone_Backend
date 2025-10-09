import { IsArray, IsDateString, IsMilitaryTime, IsNotEmpty, IsString } from 'class-validator';

export class CreateSongDTO {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString({ each: true })
  @IsArray()
  @IsNotEmpty()
  readonly artists: string[];

  @IsDateString()
  @IsNotEmpty()
  readonly releaseDate: Date;

  @IsMilitaryTime()
  @IsNotEmpty()
  @IsString()
  readonly duration: Date;
}
