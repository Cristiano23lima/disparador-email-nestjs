import { MailerService } from '@nestjs-modules/mailer';
import { Controller, Get, OnModuleInit } from '@nestjs/common';
import {
  Client,
  ClientKafka,
  EventPattern,
  Payload,
} from '@nestjs/microservices';
import { KafkaConfig } from 'src/config/kafka.config';

@Controller('disparar-email')
export class DispararEmailController implements OnModuleInit {
  constructor(private _mailerService: MailerService) {}
  @Client(KafkaConfig)
  client: ClientKafka;

  onModuleInit() {
    const request = ['disparar.email'];

    request.forEach((patter) => {
      this.client.subscribeToResponseOf('disparar.email');
    });
  }

  @EventPattern('disparar.email')
  fireEmail(@Payload() message: any): void {
    if (!!message) {
      this._mailerService.sendMail({
        to: message.value.email,
        subject: 'Testando envio de email com kafka',
        template: './confirmation',
        context: {
          name: message.value.nome,
          idade: message.value.idade,
        },
      });
    }
  }
}
