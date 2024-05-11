/*
This JavaScript code animates text to display different career options one character at a time within an HTML element with the class "container". It cycles through the array of career options, displaying each option one at a time, character by character.
*/

const containerEl = document.querySelector(".container");
const careers = ["programmer", "web developer", "self learner", "data analyst"];

let careerIndex = 0;
let characterIndex = 0;

updateText();

function updateText() {
    characterIndex++;
    // Calculate the index to use in the careers array to ensure looping
    const currentIndex = careerIndex % careers.length;
    // Update the inner HTML of the container element with a heading containing the current career string truncated to the current character index
    containerEl.innerHTML = `<h1>I am a ${careers[currentIndex].slice(
        0,
        characterIndex
    )}</h1>`;
    if (characterIndex === careers[currentIndex].length) {
        // Reset the character index to start from the beginning of the career string
        characterIndex = 0;
        // Move to the next career
        careerIndex++;
    }
    // Set a timeout to call the updateText function again after 400 milliseconds, creating a delay between each character being displayed
    setTimeout(updateText, 400);
}
