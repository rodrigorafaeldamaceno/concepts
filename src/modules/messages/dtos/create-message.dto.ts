import { ApiProperty } from '@nestjs/swagger';

export class CreateMessageDto {
  @ApiProperty({
    description: 'The content of the message',
    example: 'Hello, world!',
  })
  readonly content: string;

  @ApiProperty({
    description: 'The sender of the message',
    example: 'User1',
  })
  readonly from: string;

  @ApiProperty({
    description: 'The recipient of the message',
    example: 'User2',
  })
  readonly to: string;
}
