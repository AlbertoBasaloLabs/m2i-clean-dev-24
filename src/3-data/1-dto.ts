// ✅ interfaces, types, or classes bring cohesion

interface ClientDTO {
  name: string;
  country: string;
  city: string;
}

interface PaymentDTO {
  amount: number;
  isDeferred: boolean;
  deferredMonths: number;
  isRecurred: boolean;
}

interface CardDTO {
  number: string;
  validUntil: string;
  verificationCode: number;
}
