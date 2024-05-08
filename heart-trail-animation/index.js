/*
This JavaScript file creates an event listener on the `mousemove` event for the `body` element. When the mouse moves, it creates a new `span` element at the position of the mouse cursor within the `body`. The size of the `span` element is set randomly between 0 and 100 pixels for both width and height. The `span` element is then appended to the `body`.

After 3 seconds (3000 milliseconds), the `setTimeout` function removes the `span` element from the DOM, effectively making it disappear.

This code pairs with your CSS animation to create an effect where moving the mouse creates expanding circles on the page that eventually fade away.
*/

const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => {
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const spanEl = document.createElement("span");
    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";
    bodyEl.appendChild(spanEl);
    const size = Math.random() * 100;
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";

    setTimeout(() => {
        spanEl.remove();
    }, 3000);
});
