const TEMPLATE = document.createElement("template");

TEMPLATE.innerHTML = `
    <style>
        .blue.darken-1 {
            background-color: #1E88E5 !important;
                text-decoration: none;
                color: white;
                text-transform: uppercase;
                padding: 10px 16px;
                border-radius: 5px;
        }
        .waves-effect {
            text-decoration:none:
            text-transfor:upper;
            position: relative;
            cursor: pointer;
            display: inline-block;
            overflow: hidden;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            -webkit-tap-highlight-color: transparent;
            vertical-align: middle;
            z-index: 1;
            -webkit-transition: .3s ease-out;
            transition: .3s ease-out;
        }
    </style>
    <div class="card-action">
        <a class="waves-effect waves-light btn blue darken-1">
        </a>
    </div>
 `;

class Action extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(TEMPLATE.content.cloneNode(true));
        this.anchor = this.shadowRoot.querySelector("a");
    }

    get text() {
        const TEXT = this.getAttribute("text");
        return TEXT || "Default";
    }

    get link() {
        return this.getAttribute("link");
    }

    connectedCallback() {
        this.anchor.href = this.link;
        this.anchor.innerText = this.text;
    }
}

export default Action;
