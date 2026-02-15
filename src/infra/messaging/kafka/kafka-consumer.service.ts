/* eslint-disable prettier/prettier */
import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['stirred-bream-9626-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username: 'daslkfnhasjkgbfjkasfgbhasgfsf4894fas178dbasf',
          password: 'dsklhfjdkslhgjklsdhAdHADjlfhjKFBHjkfgbjkF',
        },
        ssl: true,
      },
    }); //vai fazer a comunicação com o kafka
  }

  async onModuleDestroy() {
    await this.close();
  }
}
