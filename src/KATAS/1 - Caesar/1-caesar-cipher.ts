// ? What is doing this code?

// ! minimal cryptic implementation
export class Caesar {
  encript(text: string, code: number): string {
    let res = "";
    for (let i = 0; i < text.length; i++) {
      let char = text.charCodeAt(i);
      let b = 0;
      if (char >= 65 && char <= 90) {
        b = 65;
      } else if (char >= 97 && char <= 122) {
        b = 97;
      }
      if (b != 0) {
        char = ((char - b + code) % 26) + b;
      }
      res += String.fromCharCode(char);
    }
    return res;
  }
}

// ToDo 1 -No magic numbers, no magic strings, no magic expressions

// With good names, the code is self-explanatory:

export class CaesarCipher {

  private readonly CASE_LENGTH = 26;
  private readonly FIRST_UPPERCASE = "A".charCodeAt(0);
  private readonly LAST_UPPERCASE = this.FIRST_UPPERCASE + this.CASE_LENGTH - 1;
  private readonly FIRST_LOWERCASE = "a".charCodeAt(0);
  private readonly LAST_LOWERCASE = this.FIRST_LOWERCASE + this.CASE_LENGTH - 1;

  encript(plainText: string, offset: number): string {
    let cipherText = "";
    for (let position = 0; position < plainText.length; position++) {
      let currentChar = plainText.charCodeAt(position);
      let caseStart = 0;
      if (currentChar >= this.FIRST_UPPERCASE && currentChar <= this.LAST_UPPERCASE) {
        caseStart = this.FIRST_UPPERCASE;
      } else if (currentChar >= this.FIRST_LOWERCASE && currentChar <= this.LAST_LOWERCASE) {
        caseStart = this.FIRST_LOWERCASE;
      }
      if (caseStart !== 0) {
        currentChar = ((currentChar - caseStart + offset) % this.CASE_LENGTH) + caseStart;
      }
      cipherText += String.fromCharCode(currentChar);
    }
    return cipherText;
  }
}

// Improved version with variables naming expressions
export class CaesarCipherExpressive {
  private readonly CASE_LENGTH = 26;
  private readonly FIRST_UPPERCASE = "A".charCodeAt(0);
  private readonly LAST_UPPERCASE = this.FIRST_UPPERCASE + this.CASE_LENGTH - 1;
  private readonly FIRST_LOWERCASE = "a".charCodeAt(0);
  private readonly LAST_LOWERCASE = this.FIRST_LOWERCASE + this.CASE_LENGTH - 1;

  encript(plainText: string, offset: number): string {
    let cipherText = "";
    for (let position = 0; position < plainText.length; position++) {
      let currentChar = plainText.charCodeAt(position);
      let cipherChar = currentChar;
      let caseStart = 0;
      let isUppercase = currentChar >= this.FIRST_UPPERCASE && currentChar <= this.LAST_UPPERCASE;
      let isLowercase = currentChar >= this.FIRST_LOWERCASE && currentChar <= this.LAST_LOWERCASE;
      if (isUppercase) {
        caseStart = this.FIRST_UPPERCASE;
      } else if (isLowercase) {
        caseStart = this.FIRST_LOWERCASE;
      }
      if (caseStart !== 0) {
        let zeroBasedCase = currentChar - caseStart;
        let offsetShift = zeroBasedCase + offset;
        let normalizedShift = offsetShift % this.CASE_LENGTH;
        cipherChar = normalizedShift + caseStart;
      }
      cipherText += String.fromCharCode(cipherChar);
    }
    return cipherText;
  }
}

// ToDo 2 : one nested level, early return, no else

// ToDO 3 : structs to handle letter cases