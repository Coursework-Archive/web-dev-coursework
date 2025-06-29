let userInput: unknown; // don't know what the user will enter, if this type is switched to any it will accept any input and not throw an error
let userName: string;

userInput = 5;
userInput = 'Max'
//userName = userInput;  type unknown and is not assignable to type string
if (typeof userInput === 'string' ) {
    userName = userInput;
}

function generateError(message: string, code: number): never  { //this is explicitly set to never as the return type 
    throw{ message: MessageChannel, errorCode: code }; // this function crashes the script and does not return anything 
    // while (true) {} this would also never return anything
}

// generateError('An error occurred!', 500)