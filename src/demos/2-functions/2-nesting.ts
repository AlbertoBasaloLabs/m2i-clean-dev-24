// ❌
function sendTripDetails() {
  const passengers: any[] = getPassengers();
  if (passengers.length >= 0) {
    for (let i = 0; i <= passengers.length; i++) {
      if (passengers[1].hasAcceptedCommunications) {
        if (passengers[i].emailAddress) {
          // 🤢 I am lost in the pyramid
          console.log("send trip details by email", passengers[i].emailAddress);
        }
        if (passengers[i].phoneNumber) {
          console.log("send trip details by SMS", passengers[i].phoneNumber);
        }
      }
    }
  }
}
function getPassengers() {
  return [];
}

function DoOneThing(a: string): number {
  return 0;
}

function DoOtherThing(x: number): boolean {
  return false;
}

function main() {
  const first = DoOneThing("hola");
  console.log(first);
  DoOtherThing(first);
}

miTexto.trim().normalize().consonantes().length();

var clientes = null;
var facturas;
function getClientes("", OnGetClients);

function OnGetClients(error, data) {

  if (error) {
      
  }
  if (data) {
    clientes = data;
    getFacturas("", (e, d) => { 

    } )
  }
}
