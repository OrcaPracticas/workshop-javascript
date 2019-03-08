import { Cuadro, Update } from "./life-cycle";


const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);


console.time("javascript");
document.onreadystatechange = () => {
    const { readyState } = document;
    if (readyState === "complete") {
        window.customElements.define("custom-square", Cuadro);
        const $ADD = document.querySelector(".add");
        const $UPDATE = document.querySelector(".update");
        const $REMOVE = document.querySelector(".remove");

        $ADD.onclick = () => {
            // Create a custom square element
            const $SQUARE = document.createElement("custom-square");
            const $ROW = document.querySelector("#demo");
            $SQUARE.setAttribute("l", "100");
            $SQUARE.setAttribute("c", "red");
            $ROW.appendChild($SQUARE);

            $UPDATE.disabled = false;
            $REMOVE.disabled = false;
            $ADD.disabled = true;
        };

        $UPDATE.onclick = () => {
            const $SQUARE = document.querySelector("custom-square");
            $SQUARE.setAttribute("l", random(50, 300));
            $SQUARE.setAttribute("c", `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`);
        };

        $REMOVE.onclick = () => {
            // Remove the square
            const $SQUARE = document.querySelector("custom-square");
            $SQUARE.remove();
            $UPDATE.disabled = true;
            $REMOVE.disabled = true;
            $ADD.disabled = false;
        };
    }
};
console.timeEnd("javascript");
