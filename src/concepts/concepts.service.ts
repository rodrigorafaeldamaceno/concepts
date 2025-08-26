import { Injectable } from '@nestjs/common';

@Injectable()
export class ConceptsService {
  findAll() {
    return [
      {
        id: 1,
        name: 'Concept 1',
        description: 'Description for Concept 1',
      },
      {
        id: 2,
        name: 'Concept 2',
        description: 'Description for Concept 2',
      },
    ];
  }
}
