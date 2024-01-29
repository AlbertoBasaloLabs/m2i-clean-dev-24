import java.util.ArrayList;
import java.util.List;

public class ATM {
    private final int[] availableNotes;

    private final int minimalNote = 5;
    private final int atmLimit = 1000;

    public ATM() {
        this.availableNotes = new int[] { 500, 200, 100, 50, 20, 10, 5 };
    }

    public List<Integer> withdraw(int money) {
        if (money > 0) {
            if (money % this.minimalNote == 0) {
                // only to the ATP limit
                if (money < this.atmLimit) {
                    List<Integer> result = new ArrayList<>();
                    int amount = money;
                    for (int note : this.availableNotes) {
                        int notesCount = amount / note;
                        if (notesCount > 0) {
                            for (int i = 0; i < notesCount; i++) {
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