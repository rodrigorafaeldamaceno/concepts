import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesModule } from 'src/modules/messages/messages.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import databaseConfig from './configs/database.config';

@Module({
  imports: [TypeOrmModule.forRoot(databaseConfig), MessagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
