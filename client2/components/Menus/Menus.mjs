// --------------------------------------------------------------------------------

//  import { LitElement, html, customElement, property } from 'lit-element';  // version 2.5.0
    import { LitElement, html, css   } from 'lit';                            // version 2.0 via npm and web dev server
    import { customElement, property } from "lit/decorators.js";              // version 2.0 via npm and web dev server

//  import { html, css, LitElement } from 'https://unpkg.com/lit-element/lit-element.js?module';  // version 2.6.1 vis CDN unpkg.com

    import   jMENU   from "./Menus-config.json.mjs";  // export default jMENU;      workie: does     provide an export named 'default'
//  import { jMENU } from "./Menus-config.json.mjs";  // export default jMENU;   no workie: does not provide an export named 'jMENU'
//  import                "./Menus-config.json.mjs";  // export default jMENU;   no workie: jMENU is undefined

//  import   jMENU   from "./Menus-config.json.mjs";  // export       { jMENU }; no workie: does not provide an export named 'default'
//  import { jMENU } from "./Menus-config.json.mjs";  // export       { jMENU };    workie: does     provide an export named 'jMENU'
//  import                "./Menus-config.json.mjs";  // export       { jMENU };    workie: does     provide an export named 'jMENU'

//----------------------------------------------------------------------------------

//  let MenuLitElement = class MenuLitElement extends LitElement {
class MenuLitElement extends LitElement {

// ---- -------------------------------------------------------

     static get properties() {

        return {
            menu:    { type: Object, reflect: true },
            subMenu: { type: Object, reflect: true }
            };
        } // eop get properties()
// ---- -------------------------------------------------------

    constructor() {
        super();

        this.rootMenu = jMENU  // loaded from ./src/menu-lit-element.json

        } // eom constructor()
// ---- -------------------------------------------------------

    firstUpdated() {

        } // eom firstUpdated()
// ---- -------------------------------------------------------

     static get styles() {

        return css`

        :host {
          font-family: Arial;
          font-size: 10pt;
          }

        .container {
          position: relative;
          }

        .rootMenu {
          position: absolute;
          }

        .rootMenuItem {
          padding: 6px;
          color: #000000;
          text-decoration: none;
          }

        .rootMenuItem:hover {
          background: #eeeeee;
          }

        .menu, .subMenu {
          padding: 4px;
          border: 1px solid #d5d5d5;
          box-shadow: 2px 2px 2px #d5d5d5;
          position: absolute;
          }

        .menuItemSubMenu {
          background-image: url("data:image/gif;base64,R0lGODlhCQAJAIAAAP///zMzMyH5BAEAAAAALAAAAAAJAAkAAAIPhI8WebHsHopSOVgb26AAADs=");
          background-position: 75% 50%;
          background-repeat: no-repeat;
          }

        .text, .shortCutText {
          padding: 4px 20px;
          }

        .menuItem[disabled] {
          opacity: 0.3;
          }

        .text[checked] {
          background-image: url("data:image/gif;base64,R0lGODlhFQAVAMQfAGxsbHx8fIqKioaGhvb29nJycvr6+sDAwJqamltbW5OTk+np6YGBgeTk5Ly8vJiYmP39/fLy8qWlpa6ursjIyOLi4vj4+N/f3+3t7fT09LCwsHZ2dubm5r6+vmZmZv///yH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4wLWMwNjAgNjEuMTM0Nzc3LCAyMDEwLzAyLzEyLTE3OjMyOjAwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEY4NTZERTQ5QUFBMTFFMUE5MTVDOTM5MUZGMTE3M0QiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEY4NTZERTU5QUFBMTFFMUE5MTVDOTM5MUZGMTE3M0QiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4Rjg1NkRFMjlBQUExMUUxQTkxNUM5MzkxRkYxMTczRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4Rjg1NkRFMzlBQUExMUUxQTkxNUM5MzkxRkYxMTczRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAEAAB8ALAAAAAAVABUAAAVI4CeOZGmeaKqubKtylktSgCOLRyLd3+QJEJnh4VHcMoOfYQXQLBcBD4PA6ngGlIInEHEhPOANRkaIFhq8SuHCE1Hb8Lh8LgsBADs=");
          background-position: -4px 50%;
          background-repeat: no-repeat;
          }

        .shortCutText {
          color: gray;
          text-align: right;
          }
        `
        } // eop get styles()
// ---- -------------------------------------------------------

    render() {

        return html `

      <div class="container">

        <ul class="rootMenu">
                   ${ this.rootMenu.map( ( item ) => this.rootMenuItem( item ) ) }
        </ul>

        ${this.menu
            ? html `
          <table class="menu">
            <tbody>${ this.menu.map(     ( item ) => this.menuItem( item ) ) }</tbody>
          </table>`
            : html `` }

        ${this.subMenu
            ? html `
          <table class="subMenu">
            <tbody>${ this.subMenu.map(  ( item ) => this.menuItem( item ) ) }</tbody>
          </table>`
            : html `` }
      </div>
      <!-- /class container --> 

      <div style="position:absolute; top: 400px; left: 55px;">
        <label     for="newMenun">New Menu: </label>
        <input    name="newMenu" id="newMenu" value="Home" size="5">
        <button @click="${this.addMenu}">Submit</button> 
      </div>   

    `;
       } // eom render( )
// ---- -------------------------------------------------------

/*  Methods { */

    addMenu() {
//     alert( "hello" )
       alert( "Adding Root mennu: ''" + this.shadowRoot.getElementById( "newMenu" ).value + "'" )
       this.rootMenu.push( { Home: [] } ) 
       }

    rootMenuItem( item ) {
        return html `
    <a class="rootMenuItem" href="javascript:void(0);" @mousedown=${ this.rootMenuItemMouseDown } @mousemove=${ this.rootMenuItemMouseMove }>
      ${item.text}
    </a>`;
    }

// ---------------------------------------------------------------------------------------

  menuItem( item ) {
            console_log( "menuItem[ 1]              '" + item.text + "'", 4 )
        if (item.text === '-')                          { return this.separator();       }
   else if (item.menu && Array.isArray( item.menu   ) ) { return this.subMenuItem(item); }
   else if (item.text && typeof item.text === 'string') { return this.textItem(item);    }
        }
//  ;

    separator( ) {
            console_log( "seperator[ 1]             <tr><td colspan='2'><hr></td><td></td></tr" )
        return html `
    <tr>
      <td colspan="2">
        <hr>
      </td>
      <td></td>
    </tr>`;
        }

    subMenuItem( item ) {
            console_log( "subMenuItem[ 1]           <tr class='menuItem>' @mousemove=${this.subMenuItemMouseMove}" )
            console_log( "subMenuItem[ 2]             " + strip( this.text( item ).innerHTML ) )
            console_log( "subMenuItem[ 3]             <td class='menuItemSubMenu'></td>" )
            console_log( "subMenuItem[ 4]           </tr>" )
        return html `
    <tr class="menuItem" ?disabled=${item.disabled} @mousemove=${this.subMenuItemMouseMove}>
      ${this.text(item)}
      <td class="menuItemSubMenu"> </td>
    </tr>`;
        }

    textItem( item ) {
            console_log( "textItem[ 1]              <tr class='menuItem>' @mousemove=${this.subMenuItemMouseMove}" )
            console_log( "textItem[ 2]                                    @mousedown=${this.subMenuItemMouseDown}" )
            console_log( "textItem[ 3]                " + strip( this.text( item ).innerHTML ) )
            console_log( "textItem[ 4]                <td class='shortCutText'>" + item.shortCutText + "</td>" )
            console_log( "textItem[ 5]              </tr>" )
        return html `
    <tr class="menuItem" ?disabled=${item.disabled} @mousedown=${this.menuItemMouseDown} @mousemove=${this.menuItemMouseMove}>
      ${this.text(item)}
      <td class="shortCutText">${item.shortCutText}</td>
    </tr>`;
        }

    text( menuItem ) {
        return html `
    <td class="text" ?checked=${menuItem.checked}>
      ${menuItem.text}
    </td>`;
        }
// ---------------------------------------------------------------------------------------

    rootMenuItemMouseDown( event ) {
            console_log( "rootMenuItemMouseDown[ 1] '" + strip( event.currentTarget.textContent ) + "'" ); TheLastMsg3 = ""
            console_log( "rootMenuItemMouseDown[ 2]  this.showMenu( event )" )

            this.showMenu( event );
        }

    rootMenuItemMouseMove( event ) {
            console_log( "rootMenuItemMouseMove[ 1] '" + event.currentTarget.text.trim() + "'", 1 )
        if (this.currentRootMenuItem && this.currentRootMenuItem !== event.currentTarget) {
            console_log( "rootMenuItemMouseMove[ 2]  this.showMenu( event )", 2 )
            this.showMenu( event );
            }
        }

    menuItemMouseDown(     event ) {
            console_log( "menuItemMouseDown[ 1]     '" + strip( event.currentTarget.textContent ) + "'" ); TheLastMsg3 = ""

            this.currentMenuItem = event.currentTarget;
        if (!this.currentMenuItem.disabled) {
            console_log( "menuItemMouseDown[ 2]      alert( '" + event.currentTarget.textContent.trim().replace( /[\r\n]+/g, "<br>") + "' )" )
            console_log( "menuItemMouseMove[ 3]      this.closeMenu( )" )
            alert( this.currentMenuItem.textContent.trim() );
            this.closeMenu();
            }
        }

    menuItemMouseMove(     event ) {
            console_log( "menuItemMouseMove[ 1]     '" + strip( event.currentTarget.innerHTML ) + "'", 1 )
        if (!this.inSubMenu( event.currentTarget ) ) {
            console_log( "menuItemMouseMove[ 2]      this.closeSubMenu( )", 2 )
            this.closeSubMenu( );
            }
        }

    subMenuItemMouseMove(  event ) {
            console_log( "subMenuItemMouseMove[ 1]  '" + strip( event.currentTarget.innerHTML ) + "'", 1 )
            console_log( "subMenuItemMouseMove[ 2]   this.showSubMenu( event );", 2 )
            this.showSubMenu( event );
        }
//  ----------------------------------------------------------

showMenu( event ) {
            console_log( "showMenu[ 1]               __awaiter( this, 0, 0, function*() { ... } )", 3 )

        return __awaiter( this, void 0, void 0, function*( ) {

            this.closeMenu( );
            this.currentRootMenuItem = event.currentTarget;

       if (!this.rootMenu ) {
        var aItem = this.rootMenu ? this.rootMenu.textContent.trim() : "?????"
            console_log( "showMenu[ 2]               this.rootMenu, '" + aItem + "', NOT FOUND" )
            return
            }

      const text         = this.currentRootMenuItem.text.trim();
      const menuItem     = this.rootMenu.find( ( menuItem ) => menuItem.text === text );

        if (menuItem) {
            TheLastMsg3  = ""
            console_log( "showMenu[ 3]               menuItem: '" + text.replace( /\n/g, "\nshowMenu[ 2]" ) + "'" )

            this.menu    = menuItem.menu;
            }

        if (this.menu) {

        var mPos         = this.menuOrigin( this.currentRootMenuItem )
        var pTable       = this.shadowRoot.querySelector( '.menu' )
        var aItem        = pTable ? strip( pTable.innerHTML ) : "null"
            console_log( "showMenu[ 4]               yield this.requestUpdate( )" )
            console_log( "showMenu[ 5]               this.positionMenu( '" + aItem + ".menu', " + fmtPos( mPos ) + " )" )

      yield this.requestUpdate( );
            this.positionMenu( this.shadowRoot.querySelector('.menu'), this.menuOrigin( this.currentRootMenuItem ) );
            } // eif this.menu

          } ) // eof __awaiter( this, 0, 0, function*( ) { ... } )
        } // eof showMenu
//  ----------------------------------------------------------

showSubMenu( event ) {
            console_log( "showSubMenu[ 1]            __awaiter( this, 0, 0, function*( ) { ... } )", 3 )

   return __awaiter( this, void 0, void 0, function*( ) {

        if (this.currentSubMenuItem !== event.currentTarget) {

            this.closeSubMenu();
            this.currentSubMenuItem   = event.currentTarget;

        if (this.currentSubMenuItem) {

       if (!this.menu ) {
        var aItem = this.menu ? this.menu.textContent.trim() : "?????"
            console_log( "showSubMenu[ 2]            this.menu, '" + aItem + "', NOT FOUND" )
            return
            }

      const text         = this.currentSubMenuItem.firstElementChild.textContent.trim();
      const subMenuItem  = this.menu.find( ( item ) => item.text === text);

        if (subMenuItem) {
            TheLastMsg3  = ""
            console_log( "showSubMenu[ 3]            subMenuItem: '" + text.replace( /\n/g, "\nshowSubMenu[ 2]" ) + "'" )

            this.subMenu = subMenuItem.menu;
            }

        if (this.subMenu) {

        var mPos         = this.subMenuOrigin( this.currentRootMenuItem, this.currentSubMenuItem )
        var pTable       = this.shadowRoot.querySelector( '.subMenu' ) // 1st node with class, if any
        var aItem        = pTable ? strip( pTable.innerHTML ) : "null"
            console_log( "showSubMenu[ 4]            yield this.requestUpdate( )" )
            console_log( "showSubMenu[ 5]            this.positionMenu( '" + aItem + ".subMenu', " + fmtPos( mPos ) + " )" )

      yield this.requestUpdate();
            this.positionMenu( this.shadowRoot.querySelector( '.subMenu' ), this.subMenuOrigin( this.currentRootMenuItem, this.currentSubMenuItem ) );
            } // eif this.subMenu

            } // eif this.currentSubMenuItem
            } // eif this.currentSubMenuItem !== event.currentTarget) { ... }

          } ); // eof __awaiter( this, 0, 0, function*( ) { ... } )
        } // eof showSubMenu
//  ----------------------------------------------------------

    inSubMenu( menuItem ) {
        return menuItem.parentElement.parentElement.classList.contains("subMenu");
        }

    menuOrigin( rootMenuItem ) {
        let { left: x, top: y } = rootMenuItem.getBoundingClientRect();
        x -= 8;
        y += rootMenuItem.offsetHeight - 8;
        return { x, y };
        }

    subMenuOrigin( menuItem, subMenuItem ) {
        if (!menuItem || !subMenuItem) {
            throw Error('No menuItem or subMenuItem');
            }
        return {
            x: menuItem.offsetLeft   + subMenuItem.offsetWidth + 10,
            y: subMenuItem.offsetTop + 24
            };
        }

    positionMenu( menuContainer, origin ) {
      if (! menuContainer ) {
        var aItem = menuContainer ? strip( menuContainer.textContent ) : "?????"
            console_log( "positionMenu[ 1]           menuContainer, '" + aItem + "', NOT FOUND" )
      } else {
        var aItem = strip( menuContainer.textContent )
            console_log( "positionMenu[ 2]           " + aItem + ": " + fmtPos( origin ), 4 )
        	menuContainer.style.left    = `${origin.x}px`;
        	menuContainer.style.top     = `${origin.y}px`;
        }  }
//  ----------------------------------------------------------

    closeMenu() {
        this.menu                   = null;
        this.subMenu                = null;
        this.currentRootMenuItem    = undefined;
        this.currentMenuItem        = undefined;
        this.currentSubMenuItem     = undefined;
        }

    closeSubMenu() {
        this.subMenu                = null;
        this.currentSubMenuItem     = undefined;
        } // eof closeSubMenu
//  -----------------------------------------------------------
//      } // eom methods( )
// ---- -------------------------------------------------------
   }; // eoc MenuLitElement
//----------------------------------------------------------------------------------

    customElements.define( 'menu-lit-element', MenuLitElement );

//-------------------------------------------------------------

//  return                                                  __awaiter( this,    void 0,     void 0, function*( ) { ... } )
//     var __awaiter = (this && this.__awaiter) || function __awaiter( thisArg, _arguments, P,      generator            ) { ... }

  function __awaiter( thisArg, _arguments, P,      generator  ) {

     return new ( P || (P = Promise) ) ( function( resolve, reject ) {
            function fulfilled( value) { try { step( generator.next(     value ) ); } catch (e) { reject(e); } }
            function rejected(  value) { try { step( generator["throw"]( value ) ); } catch (e) { reject(e); } }
            function step(     result) { result.done ? resolve( result.value ) : new P( function( resolve ) { resolve(result.value); }).then( fulfilled, rejected ); }

            step( ( generator = generator.apply( thisArg, _arguments || [] ) ).next( ) );
            } ); // eof new Promise

        }; // eof __awaiter() { ... }

//----------------------------------------------------------------------------------

     var TheLastMsg1, TheLastMsg2, TheLastMsg3
function console_log(  aMsg, bMove ) {

         return

     if (bMove  == 1) {
     if (TheLastMsg1 == aMsg) { return }
         TheLastMsg1  = aMsg
         }
     if (bMove  == 2) {
     if (TheLastMsg2 == aMsg) { return }
         TheLastMsg2  = aMsg
         }
     if (bMove  == 3) {
     if (TheLastMsg3 == aMsg) { return }
         TheLastMsg3  = aMsg
         console.log(  "  " )
         }
     if (bMove  == 4) {
         console.log(  "  " )
         }
         console.log(  aMsg )
         }

function strip( a ) { if (!a) { return "''" }; a = `{a}`; a = a.trim(); var nPos = a.indexOf( "\n" ); return a.substr( 0, nPos ) + "..." }
function fmtPos( pPos ) { return `[ ${ Math.round( pPos.x * 1000) / 1000 }, ${ Math.trunc( pPos.y * 1000 ) / 1000 } ]` }

//----------------------------------------------------------------------------------
