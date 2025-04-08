/**
 * Copyright 2025 Alyssa F
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `ddd-card-list`
 * 
 * @demo index.html
 * @element ddd-card-list
 */

// How to extend just DDD
export class DddCard extends (I18NMixin(DDD)) {

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
        display: inline-flex;
        position: relativ;
        border-radius: 8px;
        flex-direction: column;
        min-width: 160px;
        flex-wrap: nowrap;
        padding: 0px;
        box-shadow: 0px 4px 8px 0px #00032120;
        
      }

      img
      {
        max-width: 100%;
        height: auto;
        vertical-align: bottom;
        border-radius: 8px 8px 0px 0px;
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
        display:flex;
      }

      .buttonWrapper
      {
        display: flex;
      }

      

      h2 {
        font-size: var(--ddd-card-list-label-font-size, var(--ddd-font-size-s));
        color: var(--ddd-theme-default-nittanyNavy);
        margin: 0;
        position: absolute;
        
      }

      .textBody{
        color: var(--ddd-theme-default-nittanyNavy);
        position: relative;
        margin-top: 15px;
        display:flex;
      }

    

      .buttonWrapper
      {
        text-align: center;
        display:inline-block;
        background-color: var(--ddd-theme-default-beaverBlue);
        border-radius: 8px;
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
        padding-left: 1.5rem;
        padding-right: 1rem;
        margin: 15px;
      }
      a:link, a:visited {
        color: var(--ddd-theme-default-slateMaxLight);
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
          <h2>Abington</h2>
          <div class = "textBody">
            <p>Close to Philadelphia, Penn State Abington’s suburban campus offers bachelor's degrees, athletics, and a diverse student community.</p>
          </div>
        </div>
      </div>
      <div class = "buttonWrapper">
        <a href="https://www.psu.edu/academics/campuses">DDD</a> 
      </div>
    </div>`;
  }

}

globalThis.customElements.define(DddCard.tag, DddCard);