/* Find the capitals

Write a function that takes a single string (word) as argument.
The function must return an ordered list containing the indexes of all capital letters in the string.

Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
*/

const capitals = function (word) {
    const ret = []
	for (let i=0; i < word.length; i++) {
        if (word[i] === word[i].toUpperCase()) ret.push(i)
    }
    return ret
};

console.log(capitals('CodEWaRs'))