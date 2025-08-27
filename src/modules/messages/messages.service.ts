import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { FetchMessagesDto } from './dtos/fetch-messages.dto';
import { MessageEntity } from './entities/message.entity';

@Injectable()
export class MessagesService {
  private messages: MessageEntity[] = [
    {
      id: 1,
      content: 'Hello World',
      from: 'User1',
      to: 'User2',
      read: false,
      date: new Date(),
    },
  ];

  findAll(query: FetchMessagesDto) {
    console.log(query);
    return this.messages;
  }

  findOne(id: number) {
    const message = this.findAll({}).find((message) => message.id === id);

    if (!message) {
      throw new NotFoundException(`Message with id ${id} not found`);
    }

    return message;
  }

  create(content: CreateMessageDto) {
    const messages = this.findAll({});
    const newMessage: MessageEntity = {
      id: messages.length + 1,
      ...content,
      read: false,
      date: new Date(),
    };
    messages.push(newMessage);
    return newMessage;
  }

  update(id: number, content: CreateMessageDto) {
    const messages = this.findAll({});
    const messageIndex = messages.findIndex((message) => message.id === id);
    if (messageIndex !== -1) {
      const updatedMessage: MessageEntity = {
        ...messages[messageIndex],
        content: content.content,
      };
      messages[messageIndex] = updatedMessage;
      return updatedMessage;
    }
    return null;
  }

  remove(id: number) {
    const messages = this.findAll({});
    const messageIndex = messages.findIndex((message) => message.id === id);

    if (messageIndex === -1) {
      throw new NotFoundException(`Message with id ${id} not found`);
    }

    messages.splice(messageIndex, 1);

    return {
      success: true,
      message: `Message with id ${id} has been successfully deleted`,
    };
  }
}
