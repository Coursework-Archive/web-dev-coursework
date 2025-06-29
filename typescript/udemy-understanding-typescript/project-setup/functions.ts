function add1(n1: number, n2: number): number { // function name(parameter declaration [number,string]): return type
    return n1 + n2;
}

function printResult1(num: number): void { // this function has the void return type, it does not return anything, undefined is a type in typescript, a function cannot return undefined 
    console.log('Result: ' + num)
}

function printResult2(num: number): undefined { // undefined is a type in typescript, returning nothing
    console.log('Result: ' + num)
    return;
}

printResult1(add1(5, 12));
console.log(printResult2(add1(5, 12)));

//let combineValues: Function; this is set to a function 
let combineValues: (a: number, b: number) => number; // a function type is created with arrow notation: () => return type

//combineValues = printResult1;
combineValues = add1;
//combineValues = 5; assigning a number after combinedValues has been declared as a Function will lead to compilation error 

console.log(combineValues(8, 8));

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) { //cb is the callback function, if you pass void, the result that is returned will be ignored 
    const result = n1 + n2;
    cb(result);
}


addAndHandle(10, 20, (result) => { // the third parameter is an anonymous function
    console.log(result);
}) 

//Quiz 3
function sendRequest(data: string, cb: (response: any) => void) {
    // ... sending a request with "data"
    return cb({data: 'Hi there!'});
  }
   
  sendRequest('Send this!', (response) => { 
    console.log(response);
    return true;
   });