// ? What is doing this code?

// ! minimal cryptic implementation
export class CaesarCipher {
  encrypt(text: string, code: number): string {
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

export class CaesarCipherNames {
  private readonly CASE_LENGTH = 26;
  private readonly FIRST_UPPERCASE = "A".charCodeAt(0);
  private readonly LAST_UPPERCASE = this.FIRST_UPPERCASE + this.CASE_LENGTH - 1;
  private readonly FIRST_LOWERCASE = "a".charCodeAt(0);
  private readonly LAST_LOWERCASE = this.FIRST_LOWERCASE + this.CASE_LENGTH - 1;

  encrypt(plainText: string, offset: number): string {
    let cipherText = "";
    for (let position = 0; position < plainText.length; position++) {
      let plainCharCode = plainText.charCodeAt(position);
      let encryptedCharCode = plainCharCode;
      let caseStart = 0;
      let isUppercase = plainCharCode >= this.FIRST_UPPERCASE && plainCharCode <= this.LAST_UPPERCASE;
      let isLowercase = plainCharCode >= this.FIRST_LOWERCASE && plainCharCode <= this.LAST_LOWERCASE;
      if (isUppercase) {
        caseStart = this.FIRST_UPPERCASE;
      } else if (isLowercase) {
        caseStart = this.FIRST_LOWERCASE;
      }
      let isLetter = isUppercase || isLowercase;
      if (isLetter) {
        let zeroBasedCase = plainCharCode - caseStart;
        let offsetShift = zeroBasedCase + offset;
        let normalizedShift = offsetShift % this.CASE_LENGTH;
        encryptedCharCode = normalizedShift + caseStart;
      }
      cipherText += String.fromCharCode(encryptedCharCode);
    }
    return cipherText;
  }
}

// ToDo 2 : one nested level, early return, no else

export class CaesarCipherFunctions {
  private readonly CASE_LENGTH = 26;
  private readonly FIRST_UPPERCASE = "A".charCodeAt(0);
  private readonly LAST_UPPERCASE = this.FIRST_UPPERCASE + this.CASE_LENGTH - 1;
  private readonly FIRST_LOWERCASE = "a".charCodeAt(0);
  private readonly LAST_LOWERCASE = this.FIRST_LOWERCASE + this.CASE_LENGTH - 1;

  encrypt(plainText: string, offset: number): string {
    let encryptedText = "";
    for (let position = 0; position < plainText.length; position++) {
      let plainCharCode = plainText.charCodeAt(position);
      let encryptedCharCode = this.encryptCharCode(plainCharCode, offset);
      let encryptedChar = String.fromCharCode(encryptedCharCode);
      encryptedText += encryptedChar;
    }
    return encryptedText;
  }

  private encryptCharCode(plainCharCode: number, offset: number): number {
    let encryptedCharCode = plainCharCode;
    let caseStart = this.getCaseStart(plainCharCode);
    let isLetter = caseStart !== 0;
    if (isLetter) {
      encryptedCharCode = this.shiftCharCode(plainCharCode, offset, caseStart);
    }
    return encryptedCharCode;
  }
  private getCaseStart(plainCharCode: number): number {
    let isUppercase = plainCharCode >= this.FIRST_UPPERCASE && plainCharCode <= this.LAST_UPPERCASE;
    if (isUppercase) {
      return this.FIRST_UPPERCASE;
    }
    let isLowercase = plainCharCode >= this.FIRST_LOWERCASE && plainCharCode <= this.LAST_LOWERCASE;
    if (isLowercase) {
      return this.FIRST_LOWERCASE;
    }
    return 0;
  }
  private shiftCharCode(plainChar: number, offset: number, caseStart: number): number {
    let zeroBasedCase = plainChar - caseStart;
    let offsetShift = zeroBasedCase + offset;
    let normalizedShift = offsetShift % this.CASE_LENGTH;
    let encryptedChar = normalizedShift + caseStart;
    return encryptedChar;
  }
}

// ToDO 3 : structs to handle letter cases
