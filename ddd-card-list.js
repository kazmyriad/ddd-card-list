/**
 * Copyright 2025 Alyssa F
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDD  } from "@haxtheweb/d-d-d/d-d-d.js";
import "./ddd-card.js";


/**
 * `ddd-card-list`
 * 
 * @demo index.html
 * @element ddd-card-list
 */

// NEED HELP WITH:
// 1.) - @MEDIA, how to scale
// 2.) - How make ddd-card a requirement? (WORKING on it)
// 3.) - data-primary - how to pull from DDD, should it change the button color? Nothing else?

export class DddCardList extends DDD {

  static get tag() {
    return "ddd-card-list";
  }

  constructor() {
    super();
   
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
        display: flex;
        color: var(--ddd-data-primary-7)
      }
      h3 span {
        font-size: var(--ddd-card-list-label-font-size, var(--ddd-font-size-s));
      }
      
    `];
  }

  // Lit render the HTML
  render() {
    return html`
      <div class="wrapper">
        <slot class="cards">

        </slot>
        </div>`;
  }

  firstUpdated()
  {
    super.firstUpdated();
    const cards = this.querySelectorAll('ddd-card');
    // Map elements - set data-primary in cards to this.data-primary, for each card (ddd-card)

      cards.forEach(element => {
        element.dataPrimary = this.attributes['data-primary'].value;
        console.log(element.dataPrimary);
      });
  }
}

globalThis.customElements.define(DddCardList.tag, DddCardList);