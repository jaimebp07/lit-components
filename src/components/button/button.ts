import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('wc-button')
export class WcButton extends LitElement {
  
  @property({ type: String, attribute: true }) 
  text: string = 'Click Me';

  static styles = css`
    button {
      all: initial;
      background-color: #9292b5;
      font-family: cursive; 
      margin-right: 20px;
      width: 150px;
      border-radius: 10px;
      text-align: center;
      padding: 2px;
      cursor: pointer;
    }
  `;

  render() {
    return html`<button>${this.text}</button>`;
  }
}



