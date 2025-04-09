/**
 * Copyright 2025 Alyssa F
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./ddd-card.js";


/**
 * `ddd-card-list`
 * 
 * @demo index.html
 * @element ddd-card-list
 */

// NEED HELP WITH:
// 1.) - @MEDIA, how to scale
// 2.) 
export class DddCardList extends (I18NMixin(DDD)) {

  static get tag() {
    return "ddd-card-list";
  }

  constructor() {
    super();
    this.title = "";
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
    };
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
  <!-- Generally cards are THERE, work on screen sizing next - how 
   to make it so when the screen hits a certain size, cards shift down? -->
  <ddd-card title="Abington" link="https://images.ctfassets.net/ni9rh5nu0d99/1paFaX2Dc7iHh9Z6K7mIim/1427b9970ff21dd9c8a770067638efc1/abington-02.jpg?fm=webp&w=1080&q=75">
    Close to Philadelphia, Penn State Abington’s suburban campus offers bachelor's degrees, athletics, and a diverse student community.
  </ddd-card>
  <ddd-card title="Beaver" link="https://images.ctfassets.net/ni9rh5nu0d99/6oBUNrVTNPJaoE9ahnVX2E/2c655bdcf28befdf81d5a24248a9dca5/altoona-01.jpg?fm=webp&w=1080&q=75">
    Situated on one hundred acres, Penn State Beaver offers several bachelor's degrees, on-campus housing, and varsity sports, all within easy reach of Pittsburgh.
  </ddd-card>
  <ddd-card title="Altoona" link="https://images.ctfassets.net/ni9rh5nu0d99/C6YPZMqHyRaPeRrVTun8k/1ca61866afa1b3d903944a38ea34cecc/beaver-01.jpg?fm=webp&w=1080&q=75">
    In central Pennsylvania close to University Park, Penn State Altoona offers the appeal of a small college with the prestige of a major research university.
  </ddd-card>
</div>`;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(DddCardList.tag, DddCardList);