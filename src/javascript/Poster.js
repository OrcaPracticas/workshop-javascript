class Poster extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="card-image">
                <img alt="demo" src=${this.image} />
                <span class="card-title">${this.title}</span>
            </div>
        `;
    }

    get image() {
        const SRC = this.getAttribute("image") || "http://via.placeholder.com/306x229/c0c0c0/000000/?text=placeholder";
        return SRC;
    }

    get title() {
        const TITLE = this.getAttribute("title");
        return TITLE || "Default";
    }
}

export default Poster;
