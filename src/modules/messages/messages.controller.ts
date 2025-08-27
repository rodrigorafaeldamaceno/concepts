import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dtos/create-message.dto';
import { FetchMessagesDto } from './dtos/fetch-messages.dto';
import { ApiResponse } from '@nestjs/swagger';
import { MessageEntity } from './entities/message.entity';
import { UpdateMessageDto } from './dtos/update-message.dto';

@Controller('messages')
export class MessagesController {
  constructor(private readonly service: MessagesService) {}
  @Get()
  @ApiResponse({ status: 200, description: 'List all messages', type: [MessageEntity] })
  findAll(@Query() query: FetchMessagesDto) {
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
  @ApiResponse({ status: 200, description: 'Update a message', type: MessageEntity })
  update(@Param('id') id: string, @Body() body: UpdateMessageDto) {
    return this.service.update(+id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
