
function capitalize(word) {
    if (word === undefined) throw new Error("word is required");
    var firstCapLetter = word.charAt(0).toUpperCase() + word.slice(1);
    return firstCapLetter;
  }