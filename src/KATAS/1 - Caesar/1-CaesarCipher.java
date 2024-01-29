public class CaesarCipher {
  
    public String Encrypt(String plainText, int shift) {
        StringBuilder encryptedText = new StringBuilder();
        int CASE_LENGTH = 26;
        int FIRST_UPPERCASE = 65;
        int LAST_UPPERCASE = FIRST_UPPERCASE + CASE_LENGTH - 1;
        int FIRST_LOWERCASE = 65;
        int LAST_LOWERCASE = FIRST_LOWERCASE + CASE_LENGTH - 1;
        for (int i = 0; i < plainText.length(); i++) {
            int currentChar = (int)plainText.charAt(i);
            // determine if is a character
            int base = 0;
            if (currentChar >= FIRST_UPPERCASE && currentChar <= LAST_UPPERCASE) {
                base = FIRST_UPPERCASE;
            } else if (currentChar >= FIRST_LOWERCASE && currentChar <= LAST_LOWERCASE) {
                base = FIRST_LOWERCASE;
            }
            boolean isCharacter = base !=0;
            if (isCharacter) {
                currentChar = ((currentChar - base + shift) % CASE_LENGTH) + base;
            }
            encryptedText.append((char)currentChar);
        }
        return encryptedText.toString();
    }
}