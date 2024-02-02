// Task 1: Build a function-based console log message generator
function consoleStyler(color, background, fontSize, txt) {
    // Create a new variable named message
    const massage = "%c" + txt

    // Create a style variable and assign the color
    let style = `color: ${color}`


    // Update the style variable with the background
    style += `background: ${background}`
    

    // Console log the message and style variables
    console.log(massage, style)
}

consoleStyler('blue', 'yellow', '20px', 'Styled Message')

// Task 2: Build another console log message generator
function celebrateStyler() {
    const fontStyle = "color: tomato; font-size: 50px";
    if (reason === "birthday") {
        console.log(`%cHappy birthday`, fontStyle);
    }else if (reason === "champions") {
        console.log(`%cCongrats on the title!`, fontStyle);
    }else {
        console.log(`%c${reason}`, fontStyle);
    }
}

// Task 3: Run both the consoleStyler and the celebrateStyler functions
    consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!'); 
    celebrateStyler('birthday');

