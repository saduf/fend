function checkForName(inputText) {
    
    let retValue = true;
    const regex = "\s+[^.!?]*[.!?]";

    if (inputText == null || inputText == "" || !inputText.match(regex)) {
        retValue = false;
    }

    if (inputText.match(/^[0-9]+$/)) {
            retValue = false;
    }
    
    return retValue;
}

export { checkForName }
