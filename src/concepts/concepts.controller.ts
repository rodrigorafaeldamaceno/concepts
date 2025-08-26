import { Controller, Get } from '@nestjs/common';
import { ConceptsService } from './concepts.service';

@Controller('concepts')
export class ConceptsController {
  constructor(private readonly conceptsService: ConceptsService) {}

  @Get()
  findAll() {
    return this.conceptsService.findAll();
  }
}
