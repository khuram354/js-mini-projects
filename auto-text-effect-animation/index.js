/*
This JavaScript code animates text to display different career options one character at a time within an HTML element with the class "container". It cycles through the array of career options, displaying each option one at a time, character by character.
*/

// Selects the first element in the document with the class "container" and assigns it to the variable containerEl
const containerEl = document.querySelector(".container");

// Array containing different career options
const careers = ["programmer", "web developer", "self learner", "data analyst"];

// Index to track the current career in the careers array
let careerIndex = 0;

// Index to track the current character being displayed for the current career
let characterIndex = 0;

// Calls the updateText function initially to start the text animation
updateText();

// Defines a function named updateText
function updateText() {
    // Increment the character index to move to the next character in the current career string
    characterIndex++;

    // Updates the inner HTML of the container element with a heading containing the current career string truncated to the current character index
    containerEl.innerHTML = `<h1>I am a ${careers[careerIndex].slice(
        0,
        characterIndex
    )}</h1>`;

    // Checks if the character index has reached the length of the current career string
    if (characterIndex === careers[careerIndex].length) {
        // If the end of the career string is reached, increment the career index to switch to the next career
        careerIndex++;
        // Reset the character index to start from the beginning of the new career string
        characterIndex = 0;
    }

    // Sets a timeout to call the updateText function again after 400 milliseconds, creating a delay between each character being displayed
    setTimeout(updateText, 400);
}
