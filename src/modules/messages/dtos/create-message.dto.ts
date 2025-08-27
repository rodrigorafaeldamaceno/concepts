import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateMessageDto {
  @ApiProperty({
    description: 'The content of the message',
    example: 'Hello, world!',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(255)
  readonly content: string;

  @ApiProperty({
    description: 'The sender of the message',
    example: 'User1',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(50)
  readonly from: string;

  @ApiProperty({
    description: 'The recipient of the message',
    example: 'User2',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(50)
  readonly to: string;

  @ApiProperty({
    description: 'Indicates whether the message has been read',
    example: false,
  })
  readonly read: boolean;
}
