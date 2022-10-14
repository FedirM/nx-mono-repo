import './app.element.scss';
import '@mova/component/card';

export class AppElement extends HTMLElement {
  public static observedAttributes = [];

  connectedCallback() {

    this.innerHTML = `
      <div class="container">
        <ui-card  [attr.data-info]="'kekes'" [title]="'Title'" [cardItem]="{name: 'KEK', image: 'kek', 'description': 'hui'}"></ui-card>
      </div>
      `;
  }
}
customElements.define('mova-root', AppElement);
