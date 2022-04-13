const wordSearch = (letters, word) => { 
    if(letters.length === 0) {
        return false;
    }
    const horizontalJoin = letters.map(ls => ls.join(''))
    //console.log(horizontalJoin);

    const transposedLetters = letters[0].map((_, colIndex) => letters.map(row => row[colIndex]));
    const verticalJoin = transposedLetters.map(ls => ls.join(''));
    //console.log(verticalJoin);

    
    for (l of verticalJoin) {
        if (l.includes(word)) return true
    }

    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }

    return false;
};

module.exports = wordSearch


/**
 * 
 * use search to look up words
 * 
 * create an array of vertical words
 * create an array of horizontal words
 * Match words
 * 
 * 
 * Matrix
 * searching Horizontally
 * searching vertically
 * 
 * 
 * 
 */