// ❌

export class Bookings {
  booking: any;
  create(activity: any, client: any, places: number) {}
  save(booking: any) {}
}

// ✅

export class BookingsService {
  booking: any;
  create(activity: any, client: any, places: number) {}
}

export class BookingsRepository {
  save(booking: any) {}
}
