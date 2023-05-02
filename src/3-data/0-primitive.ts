// ❌ bad smell naming 🤢
const clientName = "Mark Gates";
const clientCountry = "USA";
const clientCity = "Los Angeles"; // i am tired of writing client...
const isDeferredPayment = true; // is this still related to the client?
const amount = 999; // could it be negative?
const deferredMonths = 0; // is it related to isDeferredPayment?
const isRecurredPayment = false; // could be true when isDeferredPayment is also true?
const cardNumber = "1234123412341234"; // it is a string, so could it accept letters?
const cardValidUntil = "12/29"; // could accept 2026-6?
const cardVerificationCode = 123; // is a number or a string; is -1F valid?
