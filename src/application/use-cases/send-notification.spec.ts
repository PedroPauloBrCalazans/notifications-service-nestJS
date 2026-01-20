/* eslint-disable prettier/prettier */
import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { SendNotification } from './send-notification';



describe('Enviar notificação', () => {
  it('Deve enviar a notificação', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(notificationsRepository);

    const {notification} = await sendNotification.execute({
      content: 'Nova solicitação',
      category: 'social',
      recipientId: 'exemplo-recipientId',
    });

    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);
  });
});
