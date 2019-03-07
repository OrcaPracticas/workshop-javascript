const TEMPLATE = document.createElement("template");

TEMPLATE.innerHTML = `
    <style>
        div a {
            color: #ffab40;
            margin-right: 24px;
            -webkit-transition: color .3s ease;
            transition: color .3s ease;
            text-transform: uppercase;
            text-decoration: none;
        }
    </style>
    <div class="card-action">
        <a></a>
    </div>
 `;

class Action extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(TEMPLATE.content.cloneNode(true));
        this.anchor = this.shadowRoot.querySelector("a");
    }

    get title() {
        const TEXT = this.getAttribute("title");
        return TEXT || "Default";
    }

    get link() {
        return this.getAttribute("link");
    }

    connectedCallback() {
        this.anchor.href = this.link;
        this.anchor.innerText = this.title;
    }
}

export default Action;
