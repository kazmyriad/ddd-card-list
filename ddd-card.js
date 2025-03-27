/**
 * Copyright 2025 Alyssa F
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `ddd-card-list`
 * 
 * @demo index.html
 * @element ddd-card-list
 */
export class DddCard extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "ddd-card";
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
        background-color: var(--ddd-theme-default-slateMaxLight);
        display: flex;
        border-radius: 8px;
        flex-direction: column;
      }

      img
      {
        max-width: 100%;
        height: auto;
        vertical-align: bottom;
      }

      .divider
      {
        border-top-width: 12px;
      border-bottom-width: 0px;
      border-color: var(--ddd-theme-default-nittanyNavy);
      border-style: solid;
      }
      

      .textWrapper
      {
        display: flex;
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top: 0.75rem;
        padding-bottom: 1.25rem;
      }

      .buttonWrapper
      {
        display: lex;
      }

      h2 {
        font-size: var(--ddd-card-list-label-font-size, var(--ddd-font-size-s));
        color: var(--ddd-theme-default-nittanyNavy);
        margin: 0;
        max-width: 100%;
        display:flex;
        flex-direction: column;
      }

      p{
        color: var(--ddd-theme-default-nittanyNavy);
        display:flex;
        flex-direction: column;
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
    <div class="wrapper">
      <img src="https://images.ctfassets.net/ni9rh5nu0d99/1paFaX2Dc7iHh9Z6K7mIim/1427b9970ff21dd9c8a770067638efc1/abington-02.jpg?fm=webp&w=1080&q=75">
      <div class ="divider"></div>
      <div class = "bodyWrapper">
        <div class = "textWrapper">
          <h2>Example Heading</h2>
          <p>Example text, Lorem Ipsum be ba ba bo bu dum tissss</p>
        </div>
      </div>
      <div class = "buttonWrapper">
        <a>helllo</a>
      </div>
    </div>`;
  }

}

globalThis.customElements.define(DddCard.tag, DddCard);