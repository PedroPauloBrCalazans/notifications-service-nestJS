/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { NotificationsController } from './http/controller/notifications.controller';
import { SendNotification } from '@application/use-cases/send-notification';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [SendNotification] //pra conseguir usar o send dentro do controller preciso colocar dentro do provider, se não, não conseguimos fazer injeção de depen..
})
export class HttpModule {}
