// ❌ bad smell naming 🤢
const clientName = "Mark Gates";
const clientCountry = "USA";
const clientCity = "Los Angeles"; // i am tired of writing client...

export class Client {
  name: string = "";
  country: string = "";
  city: string = "";
}

const isDeferredPayment = true; // is this still related to the client?
const amount = 999; // could it be negative?
const deferredMonths = 0; // is it related to isDeferredPayment?
const isRecurredPayment = false; // could be true when isDeferredPayment is also true?

export class Payment {
  isDeferred = true;
  amount = 0;
  deferredMonths: Months;
  isRecurred = false;

  constructor(isDeferred: boolean, amount: number, deferredMonths: number, isRecurred: boolean) {
    if (this.validate() === false) {
      throw new Error("Invalid payment");
    }
    this.isDeferred = isDeferred;
    this.amount = amount;
    this.deferredMonths = new Months(deferredMonths);
    this.isRecurred = isRecurred;
  }

  validate(): boolean {
    if (this.isDeferred && this.amount > 0 && this.deferredMonths.value > 0) {
      return true;
    }
    return false;
  }
}

export class Months {
  private months: number;
  public get value() {
    return this.months;
  }
  constructor(months: number) {
    if (months < 0) {
      throw new Error("");
    }
    this.months = months;
  }
}

const cardNumber = "1234123412341234"; // it is a string, so could it accept letters?
const cardValidUntil = "12/29"; // could accept 2026-6?
const cardVerificationCode = 123; // is a number or a string; is -1F valid?
