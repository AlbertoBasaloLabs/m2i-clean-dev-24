public class ATM
{
    private readonly int[] notesArray;

    public ATM()
    {
        // Available notes in the ATM
        this.notesArray = new int[] { 500, 200, 100, 50, 20, 10, 5 };
    }

    public List<int> Withdraw(int money)
    {
        if (money > 0)
        {
            if (money % 5 == 0)
            {
                if (money < 1000)
                {
                    var result = new List<int>();
                    var amount = money;

                    foreach (var note in this.notesArray)
                    {
                        var notes = amount / note;
                        if (notes > 0)
                        {
                            for (var i = 0; i < notes; i++)
                            {
                                result.Add(note);
                            }

                            amount -= note * notes;
                        }
                    }
                    if (amount == 0)
                    {
                        // The amount has been fully dispensed
                        return result;
                    }
                    // Cannot dispense the amount with the available notes
                    Console.WriteLine("Cannot dispense the amount with the available notes.");
                    return null;
                }
                else
                {
                    Console.WriteLine("The amount to withdraw cannot be greater than 1000.");
                    return null;
                }
            }
            else
            {
                Console.WriteLine("The amount to withdraw must be multiple of 5.");
                return null;
            }
        }
        else
        {
            Console.WriteLine("The amount to withdraw must be greater than zero.");
            return null;
        }
    }
}