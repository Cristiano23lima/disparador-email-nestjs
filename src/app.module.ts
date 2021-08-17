import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KafkaConfig } from './config/kafka.config';
import { DispararEmailModule } from './modules/disparar-email/disparar-email.module';

@Module({
  imports: [DispararEmailModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
