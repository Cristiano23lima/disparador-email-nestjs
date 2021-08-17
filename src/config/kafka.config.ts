import { ClientOptions, Transport } from '@nestjs/microservices';

export const KafkaConfig: ClientOptions = {
  transport: Transport.KAFKA,
  options: {
    client: {
      brokers: process.env.KAFKA_BROKERS?.split(',') ?? ['127.0.0.1:9092'], //pega todos os brokers separados por ","
      retry: { retries: 5 },
    },
    consumer: {
      allowAutoTopicCreation: true,
      groupId: 'my-consumer-' + Math.random(),
    },
    producer: {
      allowAutoTopicCreation: true,
      retry: {
        retries: 5,
      },
    },
  },
};
