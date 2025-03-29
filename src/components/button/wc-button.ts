import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('wc-button')
export class WcButton extends LitElement {

  @property({ type: String, reflect: true }) 
  text: string = 'Click Me';

  static styles = css`
    button {
      background-color: #6a5acd;
      color: white;
      font-family: sans-serif;
      border: none;
      border-radius: 10px;
      text-align: center;
      padding: 10px;
      cursor: pointer;
      transition: background-color 0.3s ease;
      width: 150px;
    }
    
    button:hover {
      background-color: #5a4acb;
    }

    button:focus {
      outline: 2px solid #ffffff;
      outline-offset: 2px;
    }

    @media (max-width: 768px) {
      button {
        width: 100%;
      }
    }
  `;

  private handleClick() {
    const event = new CustomEvent('button-click', {
      detail: { message: `El botón fue clickeado` },
      bubbles: true,
      composed: true
    });
    console.log("se dispacha el evento: ", event)
    this.dispatchEvent(event);
  }

  render() {
    return html`
      <button @click=${this.handleClick} aria-label=${this.text}>
        <slot>${this.text}</slot>
      </button>
    `;
  }
}
