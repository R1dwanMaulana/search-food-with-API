class NavBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this.render();
    }
    render() {
        this.shadowDOM.innerHTML = `
        <style>

            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            :host {
                display: block;
                width: 100%;
                background-color: rgb(77, 73, 73);
                color: white;
                }
                h2 {
                    padding: 14px;
                }
        </style>
        <h2>Delicious Food</h2>`;
    }
}

customElements.define("nav-bar", NavBar);