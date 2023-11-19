const extendHex = (shortHex) => {
  // Remove the # symbol if present
  shortHex = shortHex.replace("#", "");

  // Expand short hex to full hex
  const fullHex = shortHex
    .split("")
    .map((char) => char.repeat(2))
    .join("");

  // Add the # symbol and return the full hex code
  return "#" + fullHex.toUpperCase();
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
