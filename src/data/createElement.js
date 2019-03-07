const createElement = Object.create({ config: null, customSettings: null, contetPanel: null }, {
    init:
    {
        get() {
            this.config = {
                tag: "div",
                id: `id_${Math.random().toString(36).substr(2)}`,
                label: "empty",
            };
            Object.assign(this.config, this.customSettings);
        }, // get:function
    }, // init
    factory:
    {
        get() {
            if (this.contetPanel !== null) {
                const panel = document.createElement(this.config.tag);
                let source = "";
                let config = "";
                const ENTRIES = Object.entries(this.config);
                ENTRIES.forEach((item) => {
                    const PROPERTY = item[0];
                    config = this.config[PROPERTY];
                    source = (PROPERTY === "infoText") ? `panel.innerHTML = '${config}';` : `panel.${PROPERTY} = '${config}';`;
                    eval(source);
                });

                if (this.config.label !== "" && this.config.label !== "empty") {
                    const tagLabel = document.createElement("label");
                    tagLabel.innerHTML = this.config.label;
                    this.contetPanel.appendChild(tagLabel);
                }// if (config.label != '' && config.label != 'empty')
                this.contetPanel.appendChild(panel);
                this.contetPanel = null;
            }
        }, // get:function()
    }, // factory
    create:
    {
        value(custom, selector = "") {
            this.customSettings = custom;
            this.contetPanel = (selector !== "") ? document.querySelector(selector) : document.body;
            this.init;
            this.factory;
            return this.config.id;
        }, // value
    }, // create
});// createElement

export default createElement;
