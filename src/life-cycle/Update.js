const updateStyle = (elem) => {
    const shadow = elem.shadowRoot;
    const childNodes = Array.from(shadow.childNodes);

    childNodes.forEach((childNode) => {
        if (childNode.nodeName === "STYLE") {
            childNode.textContent = `
                div {
                    width: ${elem.getAttribute("l")}px;
                    height: ${elem.getAttribute("l")}px;
                    background-color: ${elem.getAttribute("c")};
                }`;
        }
    });
};

export default updateStyle;
