class Description extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="card-content">
                <p>${this.description}</p>
            </div>
        `;
    }

    get description() {
        const DESC = this.getAttribute("description");
        return DESC || "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    }
}

export default Description;
