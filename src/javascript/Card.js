class Card extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="col s2 m4">
                <div class="card">
                    <web-poster title="${this.title}" image="${this.image}"></web-poster>
                    <web-description description="${this.description}"></web-description>
                    <web-action title="${this.title}" link="${this.link}"></web-action>
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

    disconnectedCallback() {
        console.log("adios");
    }
}

export default Card;
