import { ApiProperty } from "@nestjs/swagger";

export class CreateMessageDto {
	@ApiProperty(
		{
			description: 'The content of the message',
			example: 'Hello, world!',
		}
	)
	content: string;
}