// ❌
export class Activity {
  title: string = "";
  location: any;
}

export class Performance extends Activity {
  performer: any;
  quorum: number = 500;
  capacity: number = 1000;
  editions: any[] = [];
}

export class Course extends Activity {
  performer: any;
  quorum: number = 0;
  capacity: number = 50;
  date: Date = new Date();
}

export class Excursion extends Activity {
  quorum: number = 10;
  capacity: number = 20;
  date: Date = new Date();
  transport: any;
}

export class FootballGame extends Activity {
  date: Date = new Date();
}

// ✅

export class ActivityLocation {}

export class ActivityTiming {}

export class ActivityPerformer {}

export class ActivityEditions {}

export class ActivityParticipationRange {}

export class ActivityTransport {}

export class PerformanceL {
  auditorium: ActivityLocation = new ActivityLocation();
  timing: ActivityTiming = new ActivityTiming();
  artist: ActivityPerformer = new ActivityPerformer();
  participationRange: ActivityParticipationRange = new ActivityParticipationRange();
  editions: ActivityEditions = new ActivityEditions();
}

export class CourseL {
  classroom: ActivityLocation = new ActivityLocation();
  timing: ActivityTiming = new ActivityTiming();
  teeacher: ActivityPerformer = new ActivityPerformer();
  participationRange: ActivityParticipationRange = new ActivityParticipationRange();
}

export class ExcursionL {
  location: ActivityLocation = new ActivityLocation();
  timing: ActivityTiming = new ActivityTiming();
  participationRange: ActivityParticipationRange = new ActivityParticipationRange();
  transport: ActivityTransport = new ActivityTransport();
}

export class FootballGameL {
  location: ActivityLocation = new ActivityLocation();
  timing: ActivityTiming = new ActivityTiming();
}
