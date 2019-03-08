class Description extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="card-content">
            <span class="card-title">${this.title}</span>
                <p>${this.description}</p>
            </div>
        `;
    }

    get description() {
        const DESC = this.getAttribute("description");
        return DESC || "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    }

    get title() {
        const DESC = this.getAttribute("title");
        return DESC || "title";
    }
}

export default Description;
