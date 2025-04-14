/**
 * Copyright 2025 Alyssa F
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDD, DDDPulseEffectSuper } from "@haxtheweb/d-d-d/d-d-d.js";
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
    this.link = "https://imgs.search.brave.com/YTWLQODzw6AQWvo0DyVInZ2ORfrnwHee404gWeI6tyo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tdGVr/M2QuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE4LzAxL2lt/YWdlLXBsYWNlaG9s/ZGVyLTUwMHg1MDAt/MzAweDMwMC5qcGc";
    
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      link: { type: String },
      dataPrimary: { type: String, reflect: true, attribute: 'data-primary'}
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
        max-width: 750px;
        
        display: flex;
        flex-wrap: nowrap;
        border-radius: var(--ddd-radius-sm);
        flex-direction: column;
        /* ^ DEFINITELY affecting it, but when inspecting the OG element it's there and it works? How?? */
        padding: var(--ddd-spacing-0);
        
      }

      img
      {
        height: 200px;
        object-fit: cover;
        border-radius:var(--ddd-spacing-2) var(--ddd-spacing-2) var(--ddd-spacing-0) var(--ddd-spacing-0);
      }

      .divider
      {
        border-top-width: var(--ddd-border-size-lg);
        border-bottom-width: var(--ddd-border-size-xs);
        border-color: var(--ddd-theme-primary);
        border-style: solid;
        display:flex;
      }
      

      .textWrapper
      {
        
        padding-left: var(--ddd-spacing-5);
        padding-right: var(--ddd-spacing-5);
        padding-top: var(--ddd-spacing-5);
        margin-bottom: var(--ddd-spacing-3);
        display: flex;
      }
      
      h2 {
        font-size: var(--ddd-card-list-label-font-size, var(--ddd-font-size-s));
        color: var(--ddd-theme-default-nittanyNavy);
        margin: var(--ddd-spacing-0);
        position: absolute;
        height: 30px;
        overflow: hidden;
        display: flex;
      }

      .textBody{
        color: var(--ddd-theme-default-nittanyNavy);
        margin-top: var(--ddd-spacing-10);
        height: 100px;
        overflow: hidden;
        display: flex;
      }

      .buttonWrapper
      {
        text-align: center;
        background-color: var(--ddd-theme-default-beaverBlue);
        border-radius: var(--ddd-radius-sm);
        padding-top:  var(--ddd-spacing-5);
        padding-bottom:var(--ddd-spacing-5);
        padding-left: var(--ddd-spacing-5);
        padding-right: var(--ddd-spacing-5);
        margin: var(--ddd-spacing-4);
        display: flex;

      }
      
      a
      {
        background-color: var(--ddd-theme-default-beaverBlue);
      }
      
      a:link, a:visited {
        color: var(--ddd-theme-default-slateMaxLight);
        background-color: var(--ddd-theme-default-beaverBlue);

      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
    <div class="wrapper">
      <img src="${this.link}">
      <!-- Help with this it aint working ^-->
      <div class ="divider"></div>
      <div class = "bodyWrapper">
        <div class = "textWrapper">
          <!-- SET HEIGHT FOR ELEMENTS WITHIN WRAPPER -->
          <h2>${this.title}</h2>
          <div class = "textBody">
            <slot></slot>
          </div>
        </div>

        <div class = "buttonWrapper">
        <a href="https://www.psu.edu/academics/campuses">Explore ></a> 
        </div>

      </div>
    </div>`;
  }

  static get haxProperties() {
    return {
      type: "element",
      canScale: true,

      canEditSource: true,
      gizmo: {
        title: "Call to action",
        description: "A simple button with a link to take action.",
        icon: "image:crop-16-9",
        color: "orange",
        tags: ["Layout", "marketing", "button", "link", "url", "design", "cta"],
        handles: [
          {
            type: "link",
            source: "link",
            title: "label",
          },
        ],
        meta: {
          author: "HAXTheWeb core team",
        },
      },
      settings: {
        configure: [
          {
            property: "label",
            title: "Label",
            description: "Link label",
            inputMethod: "textfield",
            required: true,
          },
          {
            property: "link",
            title: "Link",
            description: "Enter a link to any resource",
            inputMethod: "haxupload",
            noVoiceRecord: true,
            noCamera: true,
            required: true,
          },
          {
            property: "accentColor",
            title: "Accent Color",
            description: "An optional accent color.",
            inputMethod: "colorpicker",
            icon: "editor:format-color-fill",
          },
          {
            property: "hideIcon",
            title: "Hide icon",
            description: "Hide the icon used to accent text",
            inputMethod: "boolean",
          },
        ],
        advanced: [
          {
            property: "icon",
            title: "Icon",
            description: "Action link icon",
            inputMethod: "iconpicker",
          },
        ],
      },
      saveOptions: {
        unsetAttributes: ["colors", "element-visible"],
      },
      demoSchema: [
        {
          tag: "simple-cta",
          properties: {
            label: "Click to learn more",
            link: "https://haxtheweb.org/",
          },
          content: "",
        },
      ],
    };
  }

}

globalThis.customElements.define(DddCard.tag, DddCard);