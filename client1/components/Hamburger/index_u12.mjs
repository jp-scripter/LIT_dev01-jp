//import { html, render } from 'https://unpkg.com/lit-html?module';
//import { html, css, LitElement } from 'Lit';               // works in web-dev-server
  import { html, css, LitElement } from 'https://unpkg.com/lit-element/lit-element.js?module';

// @see https://unpkg.com/browse/@inventage-web-components/hamburger-menu@0.5.3/   // needs trailing slash

// <script type="module"// 
// src="https://unpkg.com/@inventage-web-components/hamburger-menu/lib/src/hamburger-menu.js?module"
// ></script>

import 'https://unpkg.com/@inventage-web-components/hamburger-menu/lib/src/hamburger-menu.js?module'

  class HamburgerButton extends LitElement {

    static get properties() {
      return {
        toggled: { type: Boolean },
//      toggled: { type: Boolean, reflect: true }, 
//      toggled: { type: String,  reflect: true },
        };
   } // eop get properties() 
// -------------------------------------------------------

  static get styles() {
     return css`
  :root {     
    --hamburger-padding-x     :  3px;
    --hamburger-padding-y     : 10px;
    --hamburger-layer-width   : 26px;
    --hamburger-layer-height  :  2px;
    --hamburger-layer-spacing :  4px;
    --hamburger-layer-color   : black;
    --hamburger-layer-border-radius : 0;
    --hamburger-hover-opacity       : 1; 
    --hamburger-hover-transition-duration : 0.15s;
    --hamburger-hover-transition-timing-function : linear;
    }
   `
   } // eop get styles() 
// -------------------------------------------------------

    render() {

      return html `
<!--    <hamburger-menu ${ this.toggled ? "toggled" : "" }></hamburger-menu> --><!-- No workie -->
        <!-- Type '"" | "toggled"' is not a Lit 2 directive' -->
        
        <hamburger-menu toggled></hamburger-menu>  
        <hamburger-menu></hamburger-menu>
        `  
      } // eom render( )
// -------------------------------------------------------
}
// -------------------------------------------------------

    customElements.define( 'my-hamburger-button', HamburgerButton ); 
    
    