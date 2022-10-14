

// const template = document.createElement('template');
// template.innerHTML = `<style>
//     h1 {
//       color: red;
//     }
//   </style>
//   <h1>Welcome From <span id="title"></span>!</h1>`;

// export class DemoTitleColoredElement extends HTMLElement {
//     public static observedAttributes = ['title'];
    
//     constructor() {
//       super();
//       this.attachShadow({ mode: 'open' });
//       this.shadowRoot!.appendChild(template.content.cloneNode(true));
//     }
  
//     attributeChangedCallback() {
//       this.shadowRoot!.getElementById('title')!.innerHTML = this.title;
//     }
// }
    
// customElements.define('ui-card', DemoTitleColoredElement);


import { MovaPageItem  } from "@mova/mova-page-item-interface";

const template = document.createElement('template');
template.innerHTML = `
<style>
      :host {
          display: block;
          background: white;
          border-radius: 6px;
          box-shadow: 5px 2px 2px grey;;
          overflow: hidden;
          max-width: 320px;
          max-width: 250px;
          min-height: 250px;
      }
      
      * {
          padding: 20px 12px;
      }
      a:link, a:visited {
          display: block;
      }
      :last-child {
          padding-bottom: 12px;
      }
      img {
          width: 100%;
          padding: 0;
      }
      
</style>

  <div id="wrapper">
    <img id="image" src="" />
    <div id="description"></div>
    <a id="name" type="link" href="#">GO</a>
  </div>
`;

export class CardComponent extends HTMLElement {

  private cardItemData!: MovaPageItem;

  public static observedAttributes = ['carditem'];//, 'title'];


  get carditem(): MovaPageItem {
    return this.cardItemData;
  }

  set carditem(item: MovaPageItem) {
    this.cardItemData = item;
    this.updateCard(this.cardItemData);
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot!.appendChild(template.content.cloneNode(true));
  }

  connectedCallback(): void {
    console.log('[Card]: appended and connected to the document');
  }

  disconnectedCallback(): void {
    console.log('[Card]: disconnected from the document');
  }

  attributeChangedCallback(): void {
    // console.log(`[Card] Attr: ${attr}   Value: ${ next }`);
    this.updateCard(<MovaPageItem>this.carditem);
  }


  updateCard(item: MovaPageItem): void {
    console.log('update: ', item);
    (<HTMLImageElement>this.shadowRoot!.getElementById('image'))!.src = item.image;
    this.shadowRoot!.getElementById('description')!.innerText = item.description;
    this.shadowRoot!.getElementById('name')!.innerHTML = item.name;
  }


}


customElements.define('ui-card', CardComponent);
