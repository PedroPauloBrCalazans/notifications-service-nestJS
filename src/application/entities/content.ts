export class Content {
  private readonly content: string;

  get value(): string {
    return this.content;
  }

  private validateContentLength(content: string): boolean {
    return content.length >= 5 && content.length <= 240;
  }

  constructor(content: string) {
    const isContentLengthValid = this.validateContentLength(content);

    if (!isContentLengthValid) {
      throw new Error('Content length error');
    }

    this.content = content;
  }
}


//Separei uma classe, um atributo especifico na nossa entidade principal de notificação, para que possa ser feito 
// operações nesse atributo de forma isolada... essa abordagem não sujo a classe principal, com varias validações