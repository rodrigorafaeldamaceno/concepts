import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { FetchMessagesDto } from './dtos/fetch-messages.dto';
import { MessageEntity } from './entities/message.entity';
import { UpdateMessageDto } from './dtos/update-message.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(MessageEntity)
    private readonly repository: Repository<MessageEntity>,
  ) {}

  async findAll(query: FetchMessagesDto) {
    const { limit, page, search, read } = query;

    const qb = this.repository.createQueryBuilder('message');

    if (search) {
      qb.andWhere('message.content ILIKE :search', { search: `%${search}%` });
    }

    if (read !== undefined) {
      qb.andWhere('message.read = :read', { read });
    }

    qb.skip((page - 1) * limit).take(limit);

    const messages = await qb.getMany();

    return messages;
  }

  async findOne(id: number) {
    const message = await this.repository.findOne({ where: { id } });

    if (!message) {
      throw new NotFoundException(`Message with id ${id} not found`);
    }

    return message;
  }

  async create(content: CreateMessageDto) {
    const newMessage = this.repository.create(content);
    await this.repository.save(newMessage);
    return newMessage;
  }

  async update(id: number, data: UpdateMessageDto) {
    const partialUpdateDto = {
      read: data.read,
      content: data.content,
    };

    const message = await this.repository.preload({ id, ...partialUpdateDto });

    if (!message) {
      throw new NotFoundException(`Message with id ${id} not found`);
    }

    await this.repository.save(message);
    return message;
  }

  async remove(id: number) {
    const message = await this.findOne(id);

    if (!message) {
      throw new NotFoundException(`Message with id ${id} not found`);
    }

    await this.repository.remove(message);
    return {
      success: true,
      message: `Message with id ${id} has been successfully deleted`,
    };
  }
}
