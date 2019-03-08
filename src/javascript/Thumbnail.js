class Thumbnail extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="card-image">
                <img alt="demo" src=${this.image} />
            </div>
        `;
    }

    get image() {
        let src = this.getAttribute("image") || "http://via.placeholder.com/306x229/c0c0c0/000000/?text=placeholder";
        src += src.includes("=placeholder") ? "" : "javacript";
        return src;
    }
}

export default Thumbnail;
