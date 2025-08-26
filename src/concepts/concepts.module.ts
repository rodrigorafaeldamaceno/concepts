import { Module } from '@nestjs/common';
import { ConceptsController } from './concepts.controller';
import { ConceptsService } from './concepts.service';

@Module({
  providers: [ConceptsService],
  controllers: [ConceptsController],
})
export class ConceptsModule {}
