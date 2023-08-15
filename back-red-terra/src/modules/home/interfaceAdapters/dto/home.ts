import { IsString } from 'class-validator';

export class HomeDto {
  @IsString()
  videoUrl: string;
}
