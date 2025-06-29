//union type 
/*
function combine(input1: number | string, input2: number | string) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2; //always works with string 
    } else {
        result = input1.toString() + input2.toString(); //always works with numbers
    }
    return result;
}

const combinedAges = combine(40, 55);
console.log(combinedAges);

const combinedNames = combine('Max', 'Anna');
console.log(combinedNames);
*/


//Alias Types 
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';




//Literal Types 
function combine(
    input1: Combinable, 
    input2: Combinable, 
    resultConversion: ConversionDescriptor
) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2; //always works with string 
    } else {
        result = input1.toString() + input2.toString(); //always works with numbers
    }
    if (resultConversion === 'as-number'){
        return +result;
    } else {
        return result.toString();
    }
    
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('40', '55', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);