import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dtos/create-message.dto';
import { ApiQuery, ApiResponse } from '@nestjs/swagger';
import { MessageEntity } from './entities/message.entity';
import { UpdateMessageDto } from './dtos/update-message.dto';
import { FetchMessagesDto } from './dtos/fetch-messages.dto';

@Controller('messages')
export class MessagesController {
  constructor(private readonly service: MessagesService) {}
  @Get()
  @ApiResponse({ status: 200, description: 'List all messages', type: [MessageEntity] })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'search', required: false, type: String })
  @ApiQuery({ name: 'read', required: false, type: Boolean })
  findAll(@Query() query: FetchMessagesDto) {
    return this.service.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() body: CreateMessageDto) {
    return this.service.create(body);
  }

  @Patch(':id')
  @ApiResponse({ status: 200, description: 'Update a message', type: MessageEntity })
  update(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateMessageDto) {
    return this.service.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
