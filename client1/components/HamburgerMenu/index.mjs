   import { html, css, LitElement } from 'https://unpkg.com/lit-element/lit-element.js?module';

// import '../customElements.mjs'
   import './dile-menu-hamburger.mjs'

class HamburgerMenu extends LitElement {

//  -------------------------------------------------------------------------

static get properties() {

      return {
         page: { type: String,  reflect: true },
         };

    } // eof get properties( ) { ... }
//  -------------------------------------------------------------------------

static get styles() {

    return css`
      #menu {                                     /* CSS variables used by dile-app-drawer */
        --dile-app-drawer-z-index               : 10000            ;          /* .menu       z-index          */ /* Smaller number put modal background under menu */
        --dile-app-drawer-modal-z-index         : 10000            ;       /* .modal      z-index          */ 
        --dile-app-drawer-modal-background-color: rgba( 20, 20, 20, 0.7 ); /* .modal      background-color */ 
        --dile-app-drawer-background-color      : #ddd           ;       /* .menu       background-color */ 
 
        --dile-app-drawer-closed-top            : -100vh           ;       /* :host/top   top              */ 
        --dile-app-drawer-closed-left           :  0               ;       /* :host/top   left             */ 
        --dile-app-drawer-content-height        :  auto            ;       /* :host/top   height           */ 
        --dile-app-drawer-content-width         :  100vw           ;       /* :host/top   width            */ 
        --dile-app-drawer-box-shadow            :  0px 1px 8px #000;       /* :host/top   box-shadow       */ 

        --dile-app-drawer-closed-top            :  0               ;       /* :host/left { top: 0  }        *//* Set top of menu */  
        --dile-app-drawer-closed-left           : -100vw           ;       /* :host/left { left: -100vw }   */ 
        --dile-app-drawer-content-height        :  100vh           ;       /* :host/left { height }         */ 
        --dile-app-drawer-content-width         :  auto            ;       /* :host/left { width: auto }    */ 
        --dile-app-drawer-box-shadow            :  1px 0px 8px #000;       /* :host/left { box-shadow: 1px 0px 8px #000 }       */ 
/*                                       h-offset v-offset blur spread color; */

        --dile-app-drawer-background-color      : #ffc;
/*      --dile-app-drawer-box-shadow            : 1px 0 18px rgba(100, 100, 10, 0.6); */  /* was: .0.3 */
        --dile-app-drawer-box-shadow            : 0px 20px 10px 10px red; 
        --dile-app-drawer-modal-background-color: rgba( 250, 250, 250, 0.7 );
/*      --dile-app-drawer-modal-z-index         : var(--dile-app-drawer-z-index, 10000) );  .modal z-index */

        --dile-hamburger-color                  : #0000ff;        /*                     background-color: #000; } */  
        --dile-hamburger-active-color           : #0000ff;     /* .hamburger.is-active { background-color: #000; } */ 
        --dile-hamburger-padding-y              : 15px;          /* .hamburger: {          padding-left,right:  15px; */
        --dile-hamburger-padding-x              : 15px;          /*                        padding-top, bottom: 15px; } */
        --dile-hamburger-height                 : 16px;          /* .hamburger-box {       height: 24px;  */
        --dile-hamburger-width                  : 16px;          /*                        width: 24px; } */
        --dile-hamburger-width                  : 16px;          /* .hamburger-inner {     width: 24px; */
        --dile-hamburger-line-size              :  3px;          /*                        height: 3px; */
        --dile-hamburger-line-size              :  3px;          /*                        border-radius: 3px; */
        --dile-hamburger-line-separation        : -6px;          /* .hamburger-inner::before { top: -6px; } */
        --dile-hamburger-line-separation        : -6px;          /* .hamburger-inner::after  { top: -6px; } */

      }
      #menu div {
        min-width  : 260px;
        }
      #menu a {
        margin-left: 10px;
        line-height: 10px;
        }
      #menu .special {
        color      : red;
      	}
      #menu .enabled {
        color      : #260c6d;
      	}
      #menu .disabled {
        color      : #d7aea3;
    /*  display    : none; */
        }
      #menu .hidden {
        display    : none;
        }
      #menu .not-done {
        color      : darkgrey;
        }


    `
    } // eof get styles() { `...` }
//  -------------------------------------------------------------------------

  render() {

//  return html`hello`


//  var mMatches  = `${location.href}#`.match( /[?&]page=(.+)[#&]/ )
    var mMatches  = location.href.match( /[?&]page=([^&]+).*$/i );      // extract arg: ?page=value
    var aPageName = mMatches ? mMatches[1].replace( /#$/, "" ) : ""

        this.page      = (aPageName ? aPageName : this.page).toLowerCase()
    var aId1Color      = "special"
    var aHomeColor     = (this.page == "home"            ) ? "hidden"   : "enabled"
    var aMembersColor  = (this.page == "members"         ) ? "disabled" : "enabled"
    var aProjectsColor = (this.page == "members-projects") ? "disabled" : "enabled"

    return html`
    <dile-menu-hamburger id="menu" 
       direction="left"        
       hamburgerAlwaysVisible
       > <!-- or direction="top" -->
      <div class="menu-content" slot="menu">
<!--        
      <input title="Menu" type="checkbox" class="Toggler">
      <div class="Hamburger" style="background: rgb(198 210 222);">
          <div></div>
        </div>
  -->        
        <h2 style="margin: 23px 0px 0px 60px;">Menu</h2>

        <p><a id="id1" href="#" class="${aId1Color}"           >Id1</a></p>
        <p><a          href="#" class="${aHomeColor}"          >Home</a></p>
        <p><a          href="#" class="${aMembersColor}"       >Members</a></p>
        <p><a          href="#" class="${aProjectsColor}"      >Members-Projects</a></p>
        <p><a          href="#" class="disabled"               >Disabled menu item</a></p>
        <p><a          href="#" class="disabled"               >Menu item</a></p>
        <p><a          href="#" class="not-done"               >Not Implemented</a></p>
        <p><a          href="#" class="enabled"                >Contact us</a></p>
        <p><a          href="#" class="enabled"                >Return</a></p>
      </div>
    </dile-menu-hamburger>
    `

    } // eof render() { `...` }
//  -------------------------------------------------------------------------

  firstUpdated() {

//      return   // no workie. no error. causes render to not be called




// this.shadowRoot.getElementById( 'open' ).addEventListener( 'click', () => {
//      this.shadowRoot.getElementById('menu').open();
//      } )
    //  this.shadowRoot.getElementById( 'id1'   ).addEventListener( 'click', ( ) => { alert( "This item, 'id1', is not disabled" ) } )

//  var pDisabled =  this.shadowRoot.querySelector(    '.disabled' )                           //  only one selected item is returned
//                                      pDisabled.addEventListener( 'click', ( ) => { alert( "This item is disabled"     ) } )

    var mNot_Done =  this.shadowRoot.querySelectorAll( '.not-done' )
        mNot_Done.forEach( pNot_Done => pNot_Done.addEventListener( 'click', ( ) => { alert( "This item is not implemented yet" ) } ) )
//      mNot_Done.foreach( pNot_Done.addEventListener( 'click', this.say2 ) )

    var mDisabled =  this.shadowRoot.querySelectorAll( '.disabled' )
    //  mDisabled.forEach( pDisabled => pDisabled.addEventListener( 'click', onClick_Disabled ) )
//      mDisabled.foreach( pDisabled.addEventListener( 'click', this.say1 ) )

//  var mEnabled  =  this.shadowRoot.querySelectorAll( '.enabled' )
//      mEnabled.forEach( setOnClick )                                                         //    workie even if no items are found
//                   this.shadowRoot.querySelectorAll( '.enabled' ).forEach( this.setOnClick ) // no workie. Functions allowed in class body
    //               this.shadowRoot.querySelectorAll( '.enabled' ).forEach(      setOnClick ) //    workie because function is in firstUpdated body

            setOnClick( this, '#Id1',      ( ) => { alert( "This is item Id1" ) } )
            setOnClick( this, '.not-done', ( ) => { alert( "This item is not implemented yet" ) } )
            setOnClick( this, '.enabled',  Enabled_onClick )
            setOnClick( this, '.disabled', Disabled_onClick )

//function  setOnClick( pLink  ) { pLink.addEventListener( 'click', onClick ) }
  function  setOnClick( pThis, aStatus, onClick  ) {
       var  mLinks = pThis.shadowRoot.querySelectorAll( aStatus )
            mLinks.forEach( pLink => pLink.addEventListener( 'click',  onClick ) )
            }

//function  onClick( pEvent ) {
  function  Enabled_onClick( pEvent ) {
        if (pEvent.currentTarget.innerHTML == "Return") {
            alert( `Click outside the menu to close it` )
            return }
            alert( `This item is ${ pEvent.currentTarget.innerHTML }` )
            }

//function  onClick_Disabled( pEvent ) {
  function  Disabled_onClick( pEvent ) {
       var  aText =  pEvent.currentTarget.innerHTML, aItem = ""
        if (aText == "Disabled link 2") { aItem = `, '${aText}',` }

            alert( `This item${aItem} is disabled`)
            }

    } // eof firstUpdated() { // set event listeners }
//  -------------------------------------------------------------------------
                                                                                               // functions can't be defined here, in a class
//function  setOnClick( pLink ) { pLink.addEventListener( 'click', onClick ) }
            setOnClick( pLink ) { pLink.addEventListener( 'click', onClick ) }                 // but methods can. I just don't know how to used them

//function  say1( ) { alert( "This item is disabled" ) }                                       // functions defined here: no workie for HTML onclick="say1"
//          say2( ) { alert( "This item is not implemented yet" ) }

//  -------------------------------------------------------------------------
  } // eoc MyComponent
//---------------------------------------------------------------------------------------

           customElements.define( 'hamburger-menu', HamburgerMenu );                           // Enables use of <my-component> tag in parent HTML file

// export const JsStory = () => html`<my-component></my-component>`;
