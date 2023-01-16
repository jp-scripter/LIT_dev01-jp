  import { DileHamburger     } from './DileHamburger.mjs';
  import { DileAppDrawer     } from "./DileAppDrawer.mjs";
//import { DileMenuHamburger } from './DileMenuHamburger.mjs';

  window.customElements.define( 'dile-hamburger',      DileHamburger );
  window.customElements.define( "dile-app-drawer",     DileAppDrawer );
//window.customElements.define( 'dile-menu-hamburger', DileMenuHamburger);

  export { DileCloseOnEscPressed } from "./DileCloseOnEscPressedMixin.mjs";