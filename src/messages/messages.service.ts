import { Injectable } from '@nestjs/common';

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
    return this.findAll().find(message => message.id === id);
  }
}
