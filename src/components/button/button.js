import {css, html, LitElement } from 'lit-element';

class Button extends LitElement {

    static get properties() {
        return {
            text: {Type: String, attribute: true }
        }
    }
    
    static get styles () {
        return css `
            button {
                all:initial;
                background-color: #9292b5;
                font-family:cursive; 
                margin-right:20px;
                width: 150px;
                border-radius:10px;
                text-align:center;
                padding: 2px;
                cursor: pointer;
            };
        `
    }
    render () {
        return html`
        <button> ${this.text} </button>
        `
    }
}

window.customElements.define('wc-button', Button);