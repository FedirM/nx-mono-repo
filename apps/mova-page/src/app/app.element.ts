import './app.element.scss';

export class AppElement extends HTMLElement {
  public static observedAttributes = [];

  connectedCallback() {

    this.innerHTML = `
      <div class="container">
        <ui-card [carditem]="{name: 'This is name', image: 'non-image', 'description': 'Some description is here...'}"></ui-card>
      </div>
      `;
  }
}
customElements.define('mova-root', AppElement);
