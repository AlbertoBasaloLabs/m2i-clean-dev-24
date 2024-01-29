import java.util.ArrayList;
import java.util.List;

public class ATM {
    private final int[] notesArray;

    public ATM() {
        // Available notes in the ATM
        this.notesArray = new int[] { 500, 200, 100, 50, 20, 10, 5 };
    }

    public List<Integer> withdraw(int money) {
        if (money > 0) {
            if (money % 5 == 0) {
                if (money < 1000) {
                    List<Integer> result = new ArrayList<>();
                    int amount = money;

                    for (int note : this.notesArray) {
                        int notes = amount / note;
                        if (notes > 0) {
                            for (int i = 0; i < notes; i++) {
                                result.add(note);
                            }
                        }
                    }
                    return result;
                }
            }
        }
        return null;
    }
}