// usar para simplificar funciones, anidamiento...

// ! dirty implementation

export class ATM {
  private notesArray: number[];

  constructor() {
    // Available notes in the ATM
    this.notesArray = [500, 200, 100, 50, 20, 10, 5];
  }

  withdraw(money: number): number[] | null {
    if (money > 0) {
      if (money % 5 === 0) {
        if (money < 1000) {
          const result: number[] = [];
          let amount = money;

          for (const note of this.notesArray) {
            const notes = Math.floor(amount / note);
            if (notes > 0) {
              for (let i = 0; i < notes; i++) {
                result.push(note);
              }

              amount -= note * notes;
            }
          }
          if (amount === 0) {
            // The amount has been fully dispensed
            return result;
          }
          // Cannot dispense the amount with the available notes
          console.log("Cannot dispense the amount with the available notes.");
          return null;
        } else {
          console.log("The amount to withdraw cannot be greater than 1000.");
          return null;
        }
      }
      else {
        console.log("The amount to withdraw must be multiple of 5.");
        return null;
      }
    } else {
      console.log("The amount to withdraw must be greater than zero.");
      return null;
    }
  }
}

// ToDo 1 : better naming, no magic numbers, no comments
// ToDo 2 : one nested level, early return, no else
