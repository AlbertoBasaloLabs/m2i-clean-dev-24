public class C
{
    public string E(string t, int s)
    {
        var r = new StringBuilder();
        for (int i = 0; i < t.Length; i++)
        {
            var c = (int)t[i];
            var b = 0;
            if (c >= 65 && c <= 90)
            {
                b = 65;
            }
            else if (c >= 97 && c <= 122)
            {
                b = 97;
            }
            if (b != 0)
            {
                c = ((c - b + s) % 26) + b;
            }
            r.Append((char)c);
        }
        return r.ToString();
    }
}