// import { html, css, LitElement } from "lit";
   import { html, css, LitElement } from 'https://unpkg.com/lit-element/lit-element.js?module';

export class DileHamburger extends LitElement {

  static get properties() {
    return {
      active: { type: Boolean },
    };
  }
 
  constructor() { 
    super()
    this.active = false // if true hamburder starts off toggled or clicked 
    }
 
  static get styles() {
    return css`
      :host {
        display: inline-block;
      }
      .hamburger {
        padding             : var(--dile-hamburger-padding-y, 15px) var(--dile-hamburger-padding-x, 15px);
        display             : flex;
        align-items         : center;
        cursor              : pointer;
        transition-property : opacity, filter;
        transition-duration : 0.15s;
        transition-timing-function: linear;
        font                : inherit;
        color               : inherit;
        text-transform      : none;
        background-color    : transparent;
        border              : 0;
        margin              : 0;
        overflow            : visible;
      }
      .hamburger:hover {
        opacity             : 0.7;
      }
      .hamburger.is-active:hover {
        opacity             : 0.7;
      }
      .hamburger.is-active .hamburger-inner,
      .hamburger.is-active .hamburger-inner::before,
      .hamburger.is-active .hamburger-inner::after {
        background-color    : var(--dile-hamburger-active-color, #000);
      }

      .hamburger-box {
        width:      var(--dile-hamburger-width, 24px);
        height:     var(--dile-hamburger-height, 24px);
        display:    inline-block;
        position:   relative;
      }

      .hamburger-inner {
        display:    block;
        top:        50%;
        margin-top: 0px;
      }
      .hamburger-inner,
      .hamburger-inner::before,
      .hamburger-inner::after {
        width:               var(--dile-hamburger-width,     24px);
        height:              var(--dile-hamburger-line-size,  3px);
        background-color:    var(--dile-hamburger-color,   #000);
        border-radius:       var(--dile-hamburger-line-size,  3px);
        position:            absolute;
        transition-property: transform;
        transition-duration: 0.15s;
        transition-timing-function: ease;
      }
      .hamburger-inner::before,
      .hamburger-inner::after {
        content: "";
        display: block;
      }
      .hamburger-inner::before {
        top: var(--dile-hamburger-line-separation, -6px);
      }
      .hamburger-inner::after {
        bottom: var(--dile-hamburger-line-separation, -6px);
      }

/*
 * Squeeze
 * ------------------------------------------------------------------------
 */
.hamburger--squeeze .hamburger-inner {
        transition-duration: 0.075s;
        transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
        } 
      .hamburger--squeeze .hamburger-inner::before {
        transition: top 0.075s 0.12s ease, opacity 0.075s ease;
        }
      .hamburger--squeeze .hamburger-inner::after {
        transition: bottom 0.075s 0.12s ease,
          transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19);
        }

      .hamburger--squeeze.is-active .hamburger-inner {
        transform: rotate(45deg);
        transition-delay: 0.12s;
        transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        }
      .hamburger--squeeze.is-active .hamburger-inner::before {
        top: 0;
        opacity: 0;
        transition: top 0.075s ease, opacity 0.075s 0.12s ease;
        }
      .hamburger--squeeze.is-active .hamburger-inner::after {
        bottom: 0;
        transform: rotate(-90deg);
        transition: bottom 0.075s ease, transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
        }

/*
 * Rick's Toggle Animation
 * ------------------------------------------------------------------------
 */
/* ...three lines to turn into an animated X 
      .MenuWrap .Toggler:checked + .Hamburger > div { */
      .hamburger--rjs-spin { 
        transform: rotate( 135deg );
        }
/* Turns Lines Into X 
      .MenuWrap .Toggler:checked + .Hamburger > div:before,
      .MenuWrap .Toggler:checked + .Hamburger > div:after { */
      .hamburger--rjs-spin::before,  
      .hamburger--spin::after { 
        top: 0;
        transform: rotate( 90deg );
        }
/* Rotate On Hover When Checked 
      .MenuWrap .Toggler:checked:hover + .Hamburger > div { */
      .hamburger--rjs-spin { 
        transform: rotate( 1305deg ); /* was 225deg */
        transition-duration:   .5s  ; /* Not needed */
        }
/*
 * Spin
 * ------------------------------------------------------------------------
 */
      .hamburger--spin           .hamburger-inner {
/*      transform          : rotate( 1260deg ); *//* negates is-active rotate */
        transition-duration: 0.075s;
        transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      }
      .hamburger--spin           .hamburger-inner::before {
        transition         : top 0.075s 0.12s ease, opacity 0.075s ease;
        }
      .hamburger--spin           .hamburger-inner::after {
        transition         : bottom 0.075s 0.12s ease, transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19);
        }

      .hamburger--spin.is-active .hamburger-inner {
 /*     transform          : rotate( 45deg ); */
        transform          : rotate( 1305deg ); /* was 225deg */
        transition-duration:   .5s;          /* Not needed */
        transition-delay   : 0.12s;
        transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        }
      .hamburger--spin.is-active .hamburger-inner::before {
        top                : 0;
        opacity            : 0;
        transition         : top 0.075s ease, opacity 0.075s 0.12s ease;
        }
      .hamburger--spin.is-active .hamburger-inner::after {
        bottom             : 0;
        transform          : rotate(-90deg);
        transition         : bottom 0.075s ease, transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
        }

      button:focus {
        outline: none;
        }
    `;
  }

  render() {
    this.animation = "hamburger--spin" // or: hamburger--squeeze 
    return html`
      <button
        class="hamburger ${this.animation} ${this.active ? "is-active" : ""}"
        type="button"
      >
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
    `;
  }
}