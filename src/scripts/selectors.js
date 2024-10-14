/**
 * References to all the elements in the `Jeff` component.
 */
export const Jeff = {
  /** @type {HTMLImageElement} */
  accessory: document.querySelector('.jeff__accessory'),
  /** @type {HTMLImageElement} */
  top: document.querySelector('.jeff__top'),
  /** @type {HTMLImageElement} */
  pants: document.querySelector('.jeff__pants'),
  /** @type {HTMLImageElement} */
  shoes: document.querySelector('.jeff__shoes'),
};

/**
 * References to all the different item list elements.
 */
export const ItemLists = {
  /** @type {HTMLDivElement} */
  accessory: document.querySelector('[data-control-type="accessory"] .item-list'),
  /** @type {HTMLDivElement} */
  top: document.querySelector('[data-control-type="top"] .item-list'),
  /** @type {HTMLDivElement} */
  pants: document.querySelector('[data-control-type="pants"] .item-list'),
  /** @type {HTMLDivElement} */
  shoes: document.querySelector('[data-control-type="shoes"] .item-list'),
};
