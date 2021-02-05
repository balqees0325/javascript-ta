// complete the function
function palindrom(str) {
  // code goes here
  const palindrome = [];
  for (let i = 0; i < str.length; i++) {
    const word = str[i].toLowerCase();
    const reversed = word.split('').reverse().join('');
    if (word === reversed) {
      palindrome.push(word); 
    }
  }
  return palindrome;
}

function solution(arg) {
  return palindrom(arg);
}

if (typeof require !== "undefined" && require.main === module) {
  if (process.argv.length <= 2) {
    throw Error("Require argument");
  }

  const arg = process.argv[2];
  console.log(solution(arg));
}

module.exports = { solution };
