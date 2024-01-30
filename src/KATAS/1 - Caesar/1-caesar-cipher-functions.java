public class MainCleanCode {
  public static void main(String[] args) {

    private static int CASE_LENGTH = 26;
    private static int FIRST_UPPERCASE = 65;
    private static int LAST_UPPERCASE = FIRST_UPPERCASE + CASE_LENGTH - 1;
    private static int FIRST_LOWERCASE = 65;
    private static int LAST_LOWERCASE = FIRST_LOWERCASE + CASE_LENGTH - 1;

    public String Encrypt(String plainText, int shift) {
      StringBuilder encryptedText = new StringBuilder();
      for (int i = 0; i < plainText.length(); i++) {
        char currentChar = plainText.charAt(i);
        int currentCharCode = (int) currentChar;
        int base = getBase(currentCharCode);
        int encryptCharCode = encryptCharCode(base, currentCharCode, shift);
        char encryptChar = (char) encryptCharCode;
        encryptedText.append(encryptChar);
      }
      return encryptedText.toString();
    }

    private int encryptCharCode(int base, int currentCharCode, int shift) {
      if (base == 0) return currentCharCode;
      int shifted = currentCharCode - base + shift;
      int normalized = shifted % CASE_LENGTH;
      int encrypted = normalized + base;
      return encrypted;
    }

    private int getBase(int currentCharCode) {
      int base = 0;
      if (currentCharCode >= FIRST_UPPERCASE
          && currentCharCode <= LAST_UPPERCASE) {
        base = FIRST_UPPERCASE;
      } else if (currentCharCode >= FIRST_LOWERCASE
          && currentCharCode <= LAST_LOWERCASE) {
        base = FIRST_LOWERCASE;
      }
      return base;
    }
  }
