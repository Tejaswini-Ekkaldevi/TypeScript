let userInput : unknown ;
userInput = 5;
userInput = 'Max';

function generateError(message: string, code: number): never{
    throw{message: message, errorcode: code};
}
generateError("An Error Occured", 505);
