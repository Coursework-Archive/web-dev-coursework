console.log('Your code goes here... ')

function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //     throw new Error('Incorrect input!'); // this hardens the code so an error is thrown
    // }
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result)
        //console.log(phrase + n1 + n2); // this converts everything to a string
    } else {
        return n1 + n2;
    }
    
}

let number1: number; 
number1 = 5; // no difference between 5.0 
const number2 = 2.8;
const printResult = true;
let resultPhrase ='Result is: ';

add(number1, number2, printResult, resultPhrase);
