public class CaesarCipher
{
    private const int CaseLength = 26;
    private const int FirstUppercase = (int)'A';
    private const int LastUppercase = FirstUppercase + CaseLength - 1;
    private const int FirstLowercase = (int)'a';
    private const int LastLowercase = FirstLowercase + CaseLength - 1;

    public string Encrypt(string plainText, int offset)
    {
        var cipherText = new StringBuilder();
        foreach (var currentChar in plainText)
        {
            var cipherChar = currentChar;
            var caseStart = 0;
            var isUppercase = currentChar >= FirstUppercase && currentChar <= LastUppercase;
            var isLowercase = currentChar >= FirstLowercase && currentChar <= LastLowercase;
            if (isUppercase)
            {
                caseStart = FirstUppercase;
            }
            else if (isLowercase)
            {
                caseStart = FirstLowercase;
            }
            var isAlphabetic = isUppercase || isLowercase;
            if (isAlphabetic)
            {
                var zeroBasedCase = currentChar - caseStart;
                var offsetShift = zeroBasedCase + offset;
                var normalizedShift = offsetShift % CaseLength;
                cipherChar = (char)(normalizedShift + caseStart);
            }
            cipherText.Append(cipherChar);
        }
        return cipherText.ToString();
    }
}