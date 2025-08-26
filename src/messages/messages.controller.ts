import { Controller, Get, Param } from '@nestjs/common';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private readonly service: MessagesService) {}
  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(id);
    return this.service.findOne(+id);
  }
}
