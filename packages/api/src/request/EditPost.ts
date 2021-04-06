import { IsString, IsArray } from 'class-validator';

// TODO: playing around with this lib for validating responses, starting simple.
// make this more robust or scrap it altogether

export class EditPost {
  @IsString()
  title!: string;

  @IsString()
  description!: string;

  @IsArray({ each: true })
  tags!: string[];
}
