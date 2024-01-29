class Client {
  // 🤢 are you asking me?
  allowed() {
    return false;
  }
}
// ❌
// 🤢 what are you doing with a client?
function client() {
  return new Client();
}

// ✅
// 😏 a verb in a function tells what she does
function createClient(): Client {
  return new Client();
}
// 😏 is, has, can, must... help reading and understanding
function isAllowed(): boolean {
  return true;
}
