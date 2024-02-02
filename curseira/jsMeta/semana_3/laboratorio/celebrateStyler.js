function celebrateStyler(reason) {
    // Define the font style
    const fontStyle = "color: tomato; font-size: 50px";

    // Check if the reason is "birthday"
    if (reason === "birthday") {
        console.log(`%cHappy birthday`, fontStyle);
    }
    // Check if the reason is "champions"
    else if (reason === "champions") {
        console.log(`%cCongrats on the title!`, fontStyle);
    }
    // Default case
    else {
        console.log(`%c${reason}`, fontStyle);
    }
}

// Example usage:
celebrateStyler("birthday"); // Logs "Happy birthday" in a styled format
celebrateStyler("champions"); // Logs "Congrats on the title!" in a styled format
celebrateStyler("new_year"); // Logs "new_year" in a styled format (default case)
