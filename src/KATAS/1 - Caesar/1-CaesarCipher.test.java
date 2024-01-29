import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

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