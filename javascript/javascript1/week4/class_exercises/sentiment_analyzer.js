const positivePossibilities = [
    "mega", "awesome", "super", "excited", "positive", "optimistic", "good", "excellent", "energetic",
];

const negativePossibilities = [
    "angry", "negative", "pessimistic", "sad", "frustrated", "bad", "down", "sick", "tired",
];


function wordMatcher (wordsPossibilities, sentence) {
    const matchesArray = [];
    for (word of wordsPossibilities) {
        if (sentence.includes(word)) {
            matchesArray.push(word);
        }
    }
    return matchesArray;
    }


function getSentimentScore(sentence, wordsPossibilities1, wordsPossibilities2) {
    
    const positiveWords = wordMatcher(wordsPossibilities1, sentence);
    const negativeWords = wordMatcher(wordsPossibilities2, sentence);

    return {
        score: positiveWords.length - negativeWords.length,
        positiveWords,
        negativeWords,
    }    
}

const sentimentScoreObject1 = getSentimentScore(
    'I am mega super awesome happy, although yesterday was a bad day because I felt sick and tired',
positivePossibilities,
negativePossibilities);
console.log(sentimentScoreObject1); 