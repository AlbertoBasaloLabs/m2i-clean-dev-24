// ❌
export class Payments {
  pay(method: any, paymentInfo: any) {
    switch (method) {
      case "credit":
        // pay with credit card
        break;
      case "transfer":
        // pay with bank transfer
        break;
      case "paypal":
        // pay with paypal
        break;
      default:
        throw new Error("Invalid payment method");
    }
  }
}

// ✅
export class CreditCardPayment {
  pay(paymentInfo: any) {
    // pay with credit card
  }
}
export class BankTransferPayment {
  pay(paymentInfo: any) {
    // pay with bank transfer
  }
}
export class PaypalPayment {
  pay(paymentInfo: any) {
    // pay with paypal
  }
}
