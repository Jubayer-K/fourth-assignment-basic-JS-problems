function calculateMoney(ticketSale) {
  if (ticketSale >= 1) {
    return ticketSale * 120 - (500 + 8 * 50);
  } else {
    return "“Invalid Number” Enter a Positive Number";
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
  if (Array.isArray(array) === true) {
    const numArray = [];
    for (const item of array) {
      if (typeof item === "number" && !isNaN(item) && !null && !undefined) {
        numArray.push(item);
      }
    }
    return numArray;
  } else {
    return "“Invalid Array” Enter a valid array";
  }
}

function password(obj) {
  if (typeof obj === "object" && obj !== null && obj !== undefined) {
    if (
      obj.hasOwnProperty("name") &&
      obj.hasOwnProperty("birthYear") &&
      obj.hasOwnProperty("siteName")
    ) {
      if (
        typeof obj.birthYear === "number" &&
        obj.birthYear >= 1000 &&
        obj.birthYear <= 9999
      ) {
        let upObj = obj.siteName + "#" + obj.name + "@" + obj.birthYear;
        return upObj.charAt(0).toUpperCase() + upObj.slice(1);
      } else {
        return "invalid";
      }
    } else {
      return "invalid";
    }
  } else {
    return "invalid";
  }
}

function monthlySavings(arr, livingCost) {
  if (Array.isArray(arr) && typeof livingCost === "number") {
    let salary = 0;
    for (const item of arr) {
      if (typeof item === "number") {
        if (item >= 3000) {
          salary = salary + item - item * 0.2;
        } else {
          salary = salary + item;
        }
      } else {
        return "invalid input";
      }
    }
    const savings = salary - livingCost;
    if (savings < 0) {
      return "“earn more”";
    } else {
      return savings;
    }
  } else {
    return "invalid input";
  }
}
