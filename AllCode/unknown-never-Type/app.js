var userInput;
userInput = 5;
userInput = 'Max';
function generateError(message, code) {
    throw { message: message, errorcode: code };
}
generateError("An Error Occured", 505);
