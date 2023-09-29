
const toLowerCase = char => char.toLowerCase();


const wordToLowerCase = word => word.split('').map(toLowerCase).join('');


const arrayToLowerCase = arr => arr.map(wordToLowerCase);


const inputArray = ["MA", "SA", "I", "SCH", "OOL"];


const outputArray = arrayToLowerCase(inputArray);


console.log(outputArray); 
