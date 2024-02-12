/**
 * return a Map of the unique letters and arrays of words that are made up of those letters
 * @param {array} words An array  of words
 */
function sameLetters(words) {
    const results = new Map();

    words.forEach(word => {
        const lowerCaseWord = word.toLowerCase();
        const wordSet = new Set(Array.from(lowerCaseWord));
        const lettersArray = Array.from(wordSet).sort();
        const key = lettersArray.join('');
        if(results.has(key)){
            const resultWords = results.get(key);
            resultWords.push(word);
            results.set(key, resultWords);
        }else{
            results.set(key, [word]);
        }
    });
    return results;
}

module.exports = sameLetters;
