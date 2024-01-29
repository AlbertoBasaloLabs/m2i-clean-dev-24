// ❌
// 🤢 too much technique and little business
function getEmployeeArray(paramCompanyNameString: string) {
  return findInMongo(paramCompanyNameString);
}
function findInMongo(searchTerm: string) {
  console.log("findInMongo", searchTerm);
}

// ✅
// function getEmployees(companyName: string) {
//   return findByCompanyName(companyName);
// }
// function findByCompanyName(companyName: string) {
//   console.log("findByCompanyName", companyName);
// }
