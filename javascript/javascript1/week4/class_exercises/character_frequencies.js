// VERSION 1: LOOKING ALONG THE WORD AND GETTING RESULTS IN SEQUENCIAL(NON-ALPHABETICAL) ORDER

function getCharacterFrequencies(word) {
    const wordInfo = {
        characters: [],
        length: 0,
    };

    for (let i = 0; i < word.length; i++) {
        const charactersArray = wordInfo.characters;
        let characterFound = false;

        for (let j = 0; j <charactersArray.length; j++) {
            const eachCharacterInfo = charactersArray[j];

            if (eachCharacterInfo.character === word[i]) {
                eachCharacterInfo.count++;
                characterFound = true;
                break;
            }
        }

        if (characterFound === false) {
            wordInfo.characters.push({
            character: word[i],
            count: 1
        })
    }
    } 

    wordInfo.length = word.length;
    return wordInfo
}

const happyCharacterCount = getCharacterFrequencies('subconscious');
console.log(happyCharacterCount);

