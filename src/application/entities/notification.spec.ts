/* eslint-disable prettier/prettier */
import { Content } from './content';
import { Notification } from './notification';

describe('Entidade de Notificação', () => {
  it('Deve ser possível criar Notificação', () => {
    const notification = new Notification({
      content: new Content('Nova solicitação'),
      category: 'social',
      recipientId: 'exemplo-recipient-id',
    });

    expect(notification).toBeTruthy();
  });
});
