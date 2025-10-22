function palindrome(str) {
  const a = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
  return a === a.split("").reverse().join("");
}

module.exports = palindrome;
