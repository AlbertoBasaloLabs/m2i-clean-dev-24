// FILEPATH: /d:/code/ab/clean-dev/tmp/2 - ATM/2-atm.test.ts
import { ATM } from './2-atm';

// ATM Kata
// You need to program a robot to withdraw money from an ATM.
// The ATM has 7 euro notes available: 5, 10, 20, 50, 100, 200 and 500.
// The robot receives the amount to withdraw as input parameter.
// The robot should return the minimal notes to return the amount.
// null if the amount is less than or equal to zero.
// null if the amount cannot be dispensed with the available notes.
// null if the amount is not a multiple of 5.
// null if the amount is more than 1000.
// Should log a message according to the error.

describe('ATM', () => {
  let atm: ATM;

  beforeEach(() => {
    atm = new ATM();
  });

  test('should return null if the amount is less than or equal to zero', () => {
    expect(atm.withdraw(0)).toBeNull();
    expect(atm.withdraw(-10)).toBeNull();
  });

  test('should return null if the amount is not a multiple of 5', () => {
    expect(atm.withdraw(7)).toBeNull();
    expect(atm.withdraw(101)).toBeNull();
  });

  test('should return the correct notes if the amount is a multiple of 5', () => {
    expect(atm.withdraw(5)).toEqual([5]);
    expect(atm.withdraw(15)).toEqual([10, 5]);
    expect(atm.withdraw(120)).toEqual([100, 20]);
    expect(atm.withdraw(735)).toEqual([500, 200, 20, 10, 5]);
  });

  test('should return null if the amount cannot be dispensed with the available notes', () => {
    // Assuming the ATM cannot dispense amounts greater than 1000
    expect(atm.withdraw(1005)).toBeNull();
  });
});