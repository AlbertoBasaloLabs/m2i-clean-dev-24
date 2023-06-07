# Use cases for an Activity Bookings system

## Create an Activity

Minimum requirements for creating an activity:

- A Title
- A Date in the future
- A non negative Price
- A Status ("draft", "published", "confirmed", "cancelled", "finished"")
- A maximum Capacity of 10
- A minimum Quorum of 5

## Update an Activity State

If is in the "draft" status can be changed to 'published'.
When published allow to confirm or cancel, return to draft, mark as finished, etc
When finished or cancelled, cannot be changed.

## Book an Activity

If is in the "published" or "confirmed" status and has enough capacity, then the activity can be booked.
If bookings reach the required quorum, then the activity status is changed to "confirmed".

Minimum requirements for booking an activity:

- A Name
- A valid Email
- A number of Seats
