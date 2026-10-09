const sentences = ["Hello world", "Learning JavaScript"];

// Using flatMap:
const words = sentences.flatMap(sentence => sentence.split(" "));

console.log(words); 
// Output: ["Hello", "world", "Learning", "JavaScript"]

const wordsOfWords = sentences.map(sentence => sentence.split(" "));

console.log(wordsOfWords)