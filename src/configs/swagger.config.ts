import { DocumentBuilder } from '@nestjs/swagger';

const swaggerConfig = new DocumentBuilder()
  .setTitle('Concepts')
  .setDescription('The concepts API description')
  .setVersion('1.0')
  .addTag('concepts')
  .build();

export default swaggerConfig;
