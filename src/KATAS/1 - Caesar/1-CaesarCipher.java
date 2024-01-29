public class C {
    public String E(String t, int s) {
        StringBuilder r = new StringBuilder();
        for (int i = 0; i < t.length(); i++) {
            int c = (int)t.charAt(i);
            int b = 0;
            if (c >= 65 && c <= 90) {
                b = 65;
            } else if (c >= 97 && c <= 122) {
                b = 97;
            }
            if (b != 0) {
                c = ((c - b + s) % 26) + b;
            }
            r.append((char)c);
        }
        return r.toString();
    }
}