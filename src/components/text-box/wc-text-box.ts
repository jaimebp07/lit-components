import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('wc-textbox')
export class WcTextBox extends LitElement {

    @property({ type: String }) type: 'text' | 'number' | 'password' | 'email' = 'text';
    @property({ type: String }) placeholder: string = '';
    @property({ type: String }) value: string = '';

  static styles = css`
      input {
      width: 100%;
      padding: 10px;
      font-size: 1rem;
      border: 1px solid #ccc;
      border-radius: 5px;
      outline: none;
      transition: border-color 0.3s ease;
    }
    input:focus {
      border-color: #6a5acd;
    }
  `;

    private handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.dispatchEvent(new CustomEvent('value-changed', {
      detail: { value: this.value },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <input 
        type="${this.type}" 
        placeholder="${this.placeholder}" 
        .value="${this.value}"
        @input="${this.handleInput}" 
      />
    `;
  }
}
