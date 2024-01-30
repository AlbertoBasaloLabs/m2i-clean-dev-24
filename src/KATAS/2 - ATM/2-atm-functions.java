import java.util.ArrayList;
import java.util.List;
public class ATM {
  private final int[] availableNoteValues;
  private final int minimalNote = 5;
  private final int atmLimit = 1000;
  public ATM() {
    this.availableNoteValues = new int[] {500, 200, 100, 50, 20, 10, 5};
  }
  public List<Integer> withdraw(int amount) {
    List<Integer> result = null;
    if (!isValid(amount)) {
      return result;
    }
    result = new ArrayList<>();
    int pendingAmount = amount;
    for (int noteValue : this.availableNoteValues) {
      pendingAmount = addNotes(pendingAmount, noteValue, result);
    }
    if (pendingAmount != 0) {
      return null;
    }
    return result;
  }
  private int addNotes(int pendingAmount, int noteValue, List<Integer> result) {
    int notesCount = pendingAmount / noteValue;
    if (notesCount <= 0) {
      return 0;
    }
    for (int i = 0; i < notesCount; i++) {
      result.add(noteValue);
    }
    int notesAmount = noteValue * notesCount;
    return pendingAmount - notesAmount;
  }
  private boolean isValid(int money) {
    boolean result = true;
    if (money <= 0) {
      result = false;
    }
    if (money % this.minimalNote != 0) {
      result = false;
    }
    if (money >= this.atmLimit) {
      result = false;
    }
    return result;
  }
}
