import { Type } from 'class-transformer';
import { IsOptional, IsNumber, IsString, IsBoolean } from 'class-validator';

export class FetchMessagesDto {
  @IsOptional()
  @Type(() => Number) // Converte automaticamente para number
  @IsNumber()
  limit: number = 50;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  page: number = 1;

  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  @Type(() => Boolean) // Converte "true"/"false" para boolean
  @IsBoolean()
  read?: boolean;
}
