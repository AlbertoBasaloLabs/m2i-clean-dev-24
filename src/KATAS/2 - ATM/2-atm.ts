// ? simplify this code

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
      } else {
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

export class AtmNames {
  private availableNoteValues: number[];
  private readonly MAX_WITHDRAW_AMOUNT = 1000;
  private readonly MIN_NOTE_VALUE = 5;

  constructor() {
    this.availableNoteValues = [500, 200, 100, 50, 20, 10, 5];
  }

  withdraw(amount: number): number[] | null {
    if (amount > 0) {
      if (amount % this.MIN_NOTE_VALUE === 0) {
        if (amount < this.MAX_WITHDRAW_AMOUNT) {
          const notesToReturn: number[] = [];
          let pendingAmount = amount;

          for (const noteValue of this.availableNoteValues) {
            const notesOfValue = Math.floor(pendingAmount / noteValue);
            if (notesOfValue > 0) {
              for (let i = 0; i < notesOfValue; i++) {
                notesToReturn.push(noteValue);
              }
              const noteValueAmount = noteValue * notesOfValue;
              pendingAmount -= noteValueAmount;
            }
          }
          if (pendingAmount === 0) {
            return notesToReturn;
          }
          console.log("Cannot dispense the amount with the available notes.");
          return null;
        } else {
          console.log("The amount to withdraw cannot be greater than 1000.");
          return null;
        }
      } else {
        console.log("The amount to withdraw must be multiple of 5.");
        return null;
      }
    } else {
      console.log("The amount to withdraw must be greater than zero.");
      return null;
    }
  }
}

// ToDo 2 : one nested level, early return, no else

// ToDO 3 : structs to validate amount, and the notes to return
