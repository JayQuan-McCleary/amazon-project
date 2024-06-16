import formatCurrency from "../scripts/utils/money.js";

console.log("test suite: Format Currency");


console.log("converts cents to dollars.js");

if (formatCurrency(2095) === "20.95") {
    console.log("passed");
} else {
    console.log("failed");
}

console.log("works with 0.js");
if (formatCurrency(0) === "0.00") {
    console.log("passed");
} else {
    console.log("failed");
}

console.log("rounds up to the nearest cent.js");
if (formatCurrency(2000.5) === "-20.01") {
    console.log("passed");
} else {
    console.log("failed");
}