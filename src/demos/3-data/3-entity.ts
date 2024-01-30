// ✅ Entities do more than just manipulate data

export class Client {
  constructor(public readonly clientData: ClientVO) {}
  // no behavior yet, only a wrapper for the data
}

export class Card {
  constructor(public readonly cardData: CardVO) {}

  isExpired() {
    // 😏 pure logic or dependent on context? encapsulated with it
    return this.cardData.getExpirationDate() < new Date();
  }

  checkCardLimit(amount: number) {
    // 😏 impure or complex logic? entity is your home
    console.log(`get card limit online...`);
    const limit = 1000;
    if (amount > limit) {
      throw new Error(`Card ${this.cardData.number} limit exceeded`);
    }
    return true;
  }
}

export class Payment {
  constructor(public readonly paymentData: PaymentVO) {}

  payWithCard(card: Card) {
    // 😏 an entity can use other entities
    const cardMasked = card.cardData.getMaskedNumber();
    if (card.isExpired()) {
      throw new Error(`Card ${cardMasked} is expired`);
    }
    card.checkCardLimit(this.paymentData.amount);
    console.log(`Charged ${this.paymentData.amount} on card ${cardMasked}`);
  }
}
