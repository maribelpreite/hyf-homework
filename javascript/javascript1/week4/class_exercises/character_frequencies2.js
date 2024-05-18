//VERSION 2: MOVING ALONG THE ALPHABET TO GET RESULTS IN ALPHABETICAL ORDER

const alphabet = "abcdefghijklmnopqrstuvwxyz"

function getCharacterFrequencies(word) {
  const wordInfo = {
      characters: [],
      length: 0,
  };

  for (let i = 0; i < alphabet.length; i++) {
    let amountOfCharacters = 0;

    for (let j = 0; j < word.length; j++) {
      if (alphabet[i] === word[j]) {
        amountOfCharacters++;
      }
    }

    if (amountOfCharacters>0) {
      wordInfo.characters.push({
        character: alphabet[i],
        count: amountOfCharacters,
    });
    }
  }

  wordInfo.length = word.length;
  return wordInfo
}

const happyCharacterCount = getCharacterFrequencies('subconscious');
console.log(happyCharacterCount);

