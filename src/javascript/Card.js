class Card extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="col s2 m4">
                <div class="card">
                    <web-thumbnail image="${this.image}"></web-thumbnail>
                    <web-caption title="${this.title}" description="${this.description}"></web-caption>
                    <web-action text="${this.text}" link="${this.link}"></web-action>
                </div>
            </div>
        `;
    }

    set description(newValue) {
        this.setAttribute("description", newValue);
    }

    set link(newValue) {
        this.setAttribute("link", newValue);
    }

    set image(newValue) {
        this.setAttribute("image", newValue);
    }

    set title(newValue) {
        this.setAttribute("title", newValue);
    }

    set text(newValue) {
        this.setAttribute("text", newValue);
    }


    get description() {
        return this.getAttribute("description") || "";
    }

    get link() {
        return this.getAttribute("link") || "";
    }

    get image() {
        return this.getAttribute("image") || "";
    }

    get title() {
        return this.getAttribute("title") || "";
    }

    get text() {
        return this.getAttribute("text") || "";
    }

    disconnectedCallback() {
        console.log("adios");
    }
}

export default Card;
