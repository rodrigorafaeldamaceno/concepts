import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Injectable()
export class MessagesService {
  findAll() {
    return [
      {
        id: 1,
        content: 'Hello, world!',
      },
      {
        id: 2,
        content: 'Hello, NestJS!',
      },
    ];
  }

  findOne(id: number) {
    return this.findAll().find((message) => message.id === id);
  }

  create(content: CreateMessageDto) {
    const messages = this.findAll();
    const newMessage = {
      id: messages.length + 1,
      content: content.content,
    };
    messages.push(newMessage);
    return newMessage;
  }

  update(id: number, content: CreateMessageDto) {
    const messages = this.findAll();
    const messageIndex = messages.findIndex((message) => message.id === id);
    if (messageIndex !== -1) {
      messages[messageIndex].content = content.content;
      return messages[messageIndex];
    }
    return null;
  }
}
