function calculateMoney(ticketSale) {
  if (ticketSale >= 1) {
    return ticketSale * 120 - (500 + 8 * 50);
  } else {
    return "'Invalid Number' Enter a Positive Number";
  }
}



function checkName(name) {
  if (typeof name !== "string") {
    return "invalid";
  }
  let lowName = name.toLowerCase();
  if (
    lowName.endsWith("a") ||
    lowName.endsWith("y") ||
    lowName.endsWith("i") ||
    lowName.endsWith("e") ||
    lowName.endsWith("o") ||
    lowName.endsWith("u") ||
    lowName.endsWith("w")
  ) {
    return "Good Name";
  } else {
    return "Bad Name";
  }
}


function deleteInvalids(array) {


    }

