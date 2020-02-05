/*!
 *  File    : menu-nodes.js
 *  Version : 1.1.0
 *  Created : 04/02/2020
 *  By      : Francesc Busquets <fbusquets@xtec.cat>
 *
 *  Display the first level of the main menu in Nodes
 *  https://agora.xtec.cat/nodes
 *
 *  @source https://github.com/projectestac/agora-hacks
 *
 *  @license EUPL-1.1
 *  @licstart
 *  (c) 2000-2019 Educational Telematic Network of Catalonia (XTEC)
 *
 *  Licensed under the EUPL, Version 1.1 or -as soon they will be approved by
 *  the European Commission- subsequent versions of the EUPL (the "Licence");
 *  You may not use this work except in compliance with the Licence.
 *
 *  You may obtain a copy of the Licence at:
 *  https://joinup.ec.europa.eu/software/page/eupl
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the Licence is distributed on an "AS IS" basis, WITHOUT
 *  WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 *  Licence for the specific language governing permissions and limitations
 *  under the Licence.
 *  @licend
 */

(function () {

  const scriptVersion = "1.1.0"
  const scriptDate = "04/Feb/2020"

  // Customized settings should be defined in a global object named "NODES_MENU_SETTINGS"
  const defaultSettings = {
    fontSize: '0.8em',
    backgroundColor: 'white',
    textTransform: 'uppercase',
    menuSeparator: '2px solid #1fa799'
  };

  const settings = Object.assign({}, defaultSettings, window.NODES_MENU_SETTINGS);

  // CSS attributes used to float/unfloat the submenus
  const floatAttr = {
    enabled: {
      position: 'absolute',
      'z-index': 100,
      padding: '1rem',
      border: '1px solid',
      'background-color': settings.backgroundColor,
      display: 'none',
      'text-transform': 'none'
    },
    disabled: {
      position: 'inherit',
      'z-index': 'inherit',
      padding: 'inherit',
      border: 'inherit',
      'background-color': 'inherit',
      display: 'inherit'
    },
  };

  const itemAttr = {
    enabled: {
      'margin-left': '1em',
      'padding-right': '1em',
      'padding-bottom': 0,
      'margin-bottom': '10px',
      'text-transform': settings.textTransform,
      'border-right': settings.menuSeparator,
      'font-size': settings.fontSize
    },
    disabled: {
      'margin-left': 'inherit',
      'padding-right': 'inherit',
      'padding-bottom': 'inherit',
      'margin-bottom': 0,
      'text-transform': 'inherit',
      'border-right': 'inherit',
      'font-size': 'inherit'
    },
  };

  const panelAttr = {
    enabled: {
      display: 'inline-block',
      'padding-bottom': 0,
      'padding-left': 0
    },
    disabled: {
      display: 'none',
      'padding-bottom': 'inherit',
      'padding-left': 'inherit'
    },
  };

  // Track the currently displayed submenu (if any)
  let currentSubMenu = null;

  // Check if there is a touch device
  let touchDevice = false;

  // Current main menu status
  let mainMenuTransformed = false;

  // Enable or disable the main menu
  function transformMainMenu(enable) {
    // Avoid repetitive transforms
    if ((enable && mainMenuTransformed) || (!enable && !mainMenuTransformed))
      return;
    // Find the main menu element
    const mainMenu = document.querySelector('#menu-panel');
    if (mainMenu) {
      // Any click outside menu items hide submenu
      if (enable)
        mainMenu.addEventListener('click', hideSubMenu);
      else
        mainMenu.removeEventListener('click', hideSubMenu);

      mainMenu.querySelectorAll('.main-menu-item').forEach((element, n, listObj) => {
        // Add or remove event listeners
        if (enable) {
          element.addEventListener('touchstart', handleTouchStart);
          element.addEventListener('mouseenter', handleMouseEnter);
          element.addEventListener('click', handleMouseClick);
        }
        else {
          element.removeEventListener('touchstart', handleTouchStart);
          element.removeEventListener('mouseenter', handleMouseEnter);
          element.removeEventListener('click', handleMouseClick);
        }
        // Set CSS attributes
        Object.assign(element.style, itemAttr[enable ? 'enabled' : 'disabled']);
        if (n === listObj.length - 1)
          element.style['border-right'] = 'inherit';
        // Float or unfloat the submenus
        element.querySelectorAll('.sub-menu')
          .forEach(submenu => Object.assign(submenu.style, floatAttr[enable ? 'enabled' : 'disabled']));
      });
      // Set CSS attributes to the main menu
      Object.assign(mainMenu.style, panelAttr[enable ? 'enabled' : 'disabled']);
      // Set the transformed flag
      mainMenuTransformed = enable;
    }
  }

  // Hide current submenu and replace it by another one (when not null)
  function showSubMenu(menu) {
    if (currentSubMenu) {
      setElementVisible(currentSubMenu, false);
      currentSubMenu = null;
    }
    if (menu) {
      currentSubMenu = menu;
      setElementVisible(currentSubMenu, true);
    }
  }

  // Hide current submenu
  function hideSubMenu() {
    showSubMenu(null);
  }

  // Show/hide an element
  function setElementVisible(element, enable) {
    element.style.display = enable ? '' : 'none';
  }

  // Detect if this is a touch device
  function handleTouchStart() {
    touchDevice = true;
  }

  // Handle mouse enter events
  function handleMouseEnter(ev) {
    ev.preventDefault();
    // Don't process mouseenter on touch devices
    if (touchDevice)
      return;
    // Get the event target
    let el = ev.target;
    // The click can be originated by a children, so find the closest "li" parent
    while (el && !el.classList.contains('main-menu-item'))
      el = el.parentElement;
    // Show new submenu, if any
    showSubMenu(el.querySelector('.sub-menu'));
  }

  // Handle mouse click events
  function handleMouseClick(ev) {
    let el = ev.target;
    // The click can be originated by a children, so find the closest "li" parent
    while (el && !el.classList.contains('main-menu-item'))
      el = el.parentElement;
    // Continue only if element was found
    if (el) {
      // Does this element have an associated submenu?
      const subMenu = el.querySelector('.sub-menu');
      // No associated submenu exists, or exists and is already open?
      if (!subMenu || (currentSubMenu && currentSubMenu.isEqualNode(subMenu)))
        // Let's the event run (maybe it was originated on a link)
        return;
      // Cancel event propagation
      ev.preventDefault();
      ev.stopImmediatePropagation();
      // Show new submenu, if any
      showSubMenu(subMenu);
    }
  }

  // Expose to global
  window.transformMainMenu = transformMainMenu;

  // Log date and version 
  console.log(`Loaded "menu-nodes.js" v${scriptVersion} (${scriptDate})`);

})();


// Actions to be performed at startup
window.addEventListener('load', () => {
  // Show the main menu
  transformMainMenu(true);
  // Click on the "Menu" button will reset the main menu
  const menuButton = document.querySelector('button[title="MENU"]');
  if (menuButton)
    menuButton.addEventListener('click', () => transformMainMenu(false));
});
