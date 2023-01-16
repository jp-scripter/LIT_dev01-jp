//import { html, css, LitElement } from 'Lit';               // works in web-dev-server
  import { html, css, LitElement } from 'https://unpkg.com/lit-element/lit-element.js?module';

// -------------------------------------------------------------------------

class NewHTMLelement extends LitElement {
// ---- -------------------------------------------------------

     static get properties() {
         
        return {
     //     copyright: { type: String, reflect: true }, 
            };
        } // eop get properties() 
// ---- -------------------------------------------------------
    
    constructor() {
        super() 

        } // eom constructor() 
// ---- -------------------------------------------------------
     
    firstUpdated() {

        } // eom firstUpdated() 
// ---- -------------------------------------------------------

    static get styles() {

        return css`
    /* New Element Styles */ 

    `
        } // eop get styles() 
// ---- -------------------------------------------------------
         
    render() { 

        return html`
    <!-- New Element HTML --> 

    `
        } // eom render( )
// ---- -------------------------------------------------------

    rendered() { 
        if (1 == 1) { console.log( "  Footer rendered") } 
        }
   } // eoc NewHTMLelement
// -------------------------------------------------------------------------

    customElements.define( 'inc-element', NewHTMLelement ); 


