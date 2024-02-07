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
  if (Array.isArray(array)) {
    const numArray = [];
    for (const item of array) {
      if (typeof item === 'number' && !isNaN(item) && !null && !undefined) {
        numArray.push(item);
      }
    }
    return numArray;
  } 
  else {
    return "“Invalid Array” Enter a valid array";
  }
}

console.log(deleteInvalids([1,2,3,-4 ]));