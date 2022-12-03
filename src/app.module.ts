import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService, OperationService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService,OperationService],
})
export class AppModule {}
