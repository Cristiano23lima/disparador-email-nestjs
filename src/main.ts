import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import dotEnvFlow = require('dotenv-flow');
import { KafkaConfig } from './config/kafka.config';

async function bootstrap() {
  dotEnvFlow.config();

  const app = await NestFactory.create(AppModule);
  app.connectMicroservice(KafkaConfig);

  await app.startAllMicroservices();
  await app.listen(3333);
}
bootstrap();
