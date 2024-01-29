import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

// Caesar Cipher Kata
// This is a type of substitution cipher in which
// Each letter in the plaintext is shifted a certain number of places down the alphabet.
// For uppercase letters, with a shift of 1, A would be replaced by B, B would become C, and so on.
// For lowercase letters, a would be replaced by b, b would become c, and so on.
// When reaching the end of the alphabet, the cipher restarts at the beginning (wraps around) of the same case.
// For example, with a shift of 1, Z would become A, and z would become a.
// For any other character, the output is the same as the input.

public class CaesarCipherTest {
    CaesarCipher caesarCipher = new CaesarCipher();

    @Test
    public void shouldCorrectlyCipherUppercaseLetters() {
        String result = caesarCipher.encrypt("HELLO", 1);
        assertEquals("IFMMP", result);
    }

    @Test
    public void shouldCorrectlyCipherLowercaseLetters() {
        String result = caesarCipher.encrypt("hello", 1);
        assertEquals("ifmmp", result);
    }
}