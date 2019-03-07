import * as web from "./javascript";
import createElement from "./data/createElement";
import Data from "./data/data.json";

console.time("javascript");
document.onreadystatechange = () => {
    const { readyState } = document;
    if (readyState === "complete") {
        window.createElement = createElement;
        const WEB_COMPONETS = new Map(Object.entries(web));
        WEB_COMPONETS.forEach((component, tag) => {
            const TAG = tag.toLowerCase();
            window.customElements.define(`web-${TAG}`, component);
        });
        Data.forEach((item) => {
            createElement.create({ tag: "web-card", ...item }, ".row");
        });
    }
};
console.timeEnd("javascript");