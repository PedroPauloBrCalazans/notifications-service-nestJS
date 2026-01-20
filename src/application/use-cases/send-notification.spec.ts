/* eslint-disable prettier/prettier */
import { SendNotification } from './send-notification';

describe('Enviar notificação', () => {
  it('Deve enviar a notificação', async () => {
    const sendNotification = new SendNotification();

    const {notification} = await sendNotification.execute({
      content: 'Nova solicitação',
      category: 'social',
      recipientId: 'exemplo-recipientId',
    });

    expect(notification).toBeTruthy()
  });
});
