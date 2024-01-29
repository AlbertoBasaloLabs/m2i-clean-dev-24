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

// ToDo 2 : one nested level, early return, no else

// ToDO 3 : structs to handle letter cases