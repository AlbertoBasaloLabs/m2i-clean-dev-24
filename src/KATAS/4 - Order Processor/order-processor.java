import java.util.List;

public class Order {
  private String id;
  private String customerName;
  private List<Item> items;
  private double totalAmount;
  private double discount;
  private String status;
}

// Item class
  public static class Item {
    private String productId;
    private int quantity;
    private double price;
}

public class OrderProcessor {

    public void processOrder(Order order) {
        // Process order logic
        // Calculate total price
        // Apply discounts
        // Update inventory
        // Generate invoice
        // Send email notification to customer
        // Send SMS notification to warehouse
        // Log order details
    }

    public int calculateTotalPrice(Order order) {
        // Calculate total price
        return 0; // Replace with actual implementation
    }

    public void applyDiscounts(Order order) {
        // Apply discounts
    }

    public void updateInventory(Order order) {
        // Update inventory
    }

    public void generateInvoice(Order order) {
        // Generate invoice
    }

    public void sendEmailNotification(Order order) {
        // Send email notification to customer
    }

    public void sendSmsNotification(Order order) {
        // Send SMS notification to warehouse
    }

    public void logOrderDetails(Order order) {
        // Log order details
    }
}