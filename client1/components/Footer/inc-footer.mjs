//import { html, css, LitElement } from 'Lit';               // works in web-dev-server
  import { html, css, LitElement } from 'https://unpkg.com/lit-element/lit-element.js?module';

// -------------------------------------------------------------------------

class Footer extends LitElement {
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
/*-----------------------------------------
The .Footer properites
------------------------------------------*/
.Footer {
    background: rgb(175 170 150);
    background: var(--HeaderFooterBGColor);
    width: 100%;
    height: 55px; 
    /*top: 10%;  /*Removed in place of the bottom property*/
    border-top: 0px solid darkgray;
    bottom: 0;
    position: fixed;
    z-index: 99;
    max-width: var(--GlobalMaxWidth);
    margin: auto;
  } 
  /*------------------------------------------*/
  .FooterNavList {
      list-style: none;
      margin: 20px;
      padding: 0;
      display: flex;
      flex-direction: row;
      justify-content: center;
  }
  /*------------------------------------------*/
  .FooterNavListItem a {
      color: black;
      font-family: var(--GlobalFontFamily);
      font-weight: bold;
      font-size: 15px;
      text-decoration: none;
      margin: 8px 0;
      padding: 12px;
  }
  /*------------------------------------------*/
  .FooterNavListItem a:hover,
  .FooterNavListItem a:active {
    color: blue;
  }
  
  .footer-break{
    display: none;
  }
  /* Footer END ^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
           `
        } // eop get styles() 
// ---- -------------------------------------------------------
         
    render() { 

        return html`
    <!-- BEG Footer Component -->
    <div class="Footer"><span class="footer-break"><br></span>
        <ul class="FooterNavList">
            <li class="FooterNavListItem"><a href="https://discord.com/channels/928752444316483585/928752444316483587" target="_blank" title="Go to Our Support Page">Support</a></li>
            <li class="FooterNavListItem"><a href="https://www.gnu.org/licenses/gpl-3.0.en.html" target="_blank" title="View Our License Agreement">License</a></li>
            <li class="FooterNavListItem"><a href="#" target="_blank">Guru Mail</a></li>
        </ul>
    </div>
    <!-- END Footer Component -->
    `
        } // eom render( )
// ---- -------------------------------------------------------

    rendered() { 
        if (1 == 1) { console.log( "  Footer rendered") } 
        }
   } // eoc Footer 
// -------------------------------------------------------------------------

    customElements.define( 'inc-footer', Footer ); 


