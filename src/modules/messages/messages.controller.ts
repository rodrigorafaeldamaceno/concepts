import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dtos/create-message.dto';
import { FetchMessagesParamsDto } from './dtos/fetch_messages_params.dto';

@Controller('messages')
export class MessagesController {
  constructor(private readonly service: MessagesService) {}
  @Get()
  findAll(@Query() query: FetchMessagesParamsDto) {
    return this.service.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(id);
    return this.service.findOne(+id);
  }

  @Post()
  create(@Body() body: CreateMessageDto) {
    return this.service.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: CreateMessageDto) {
    return this.service.update(+id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
