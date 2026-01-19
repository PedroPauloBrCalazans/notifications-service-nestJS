/* eslint-disable prettier/prettier */
import { Content } from './content';

describe('Testes relacionados ao Conteúdo da notificação.', () => {
  it('Deve ser possível criar o conteúdo da notificação', () => {
    const content = new Content('Você recebeu uma solicitação de amizade');

    expect(content).toBeTruthy();
  });

  it('Não deve ser possível criar o conteúdo da notificação com menos de 5 caracteres', () => {
    expect(() => new Content('vo')).toThrow(); //quando eu criar um conteúdo com menos de 5 deve disparar um erro
  });

  it('Não deve ser possível criar o conteúdo da notificação com mais de 240 caracteres', () => {
    expect(() => new Content('vo'.repeat(242))).toThrow();
  });
});
