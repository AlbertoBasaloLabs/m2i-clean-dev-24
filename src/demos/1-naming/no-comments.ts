// ❌
const d = 5; // days
// print the schedule
function print(d: number) {
  // for a the next d days
  console.log("your schedule for the next", d, "days");
}

//  ✅
const days = 5;
function printSchedule(days: number) {
  console.log("your schedule for the next", days, "days");
}
