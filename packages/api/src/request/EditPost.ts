import { IsString, Length } from 'class-validator';

export class EditPost {
  @IsString()
  @Length(1) // min of 1, no max
  title!: string;

  @IsString()
  description!: string;
}

