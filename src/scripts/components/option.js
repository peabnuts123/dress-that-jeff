import { Jeff } from '../selectors';

/**
 * @param {string} type Which part of the outfit is being changed (e.g. "accessory", "shoes")
 * @param {InputEvent} e HTML input event: https://developer.mozilla.org/en-US/docs/Web/API/InputEvent
 */
function onHueSliderChange(type, e) {
  /**
   * A number between 0 and 100 (inclusive)
   * @type {number}
   */
  const sliderValue = e.target.value;

  // Add `hue-rotate()` filter using CSS `turn` units:
  //  - https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/hue-rotate
  //  - https://developer.mozilla.org/en-US/docs/Web/CSS/angle#turn
  const cssFilterValue = `hue-rotate(${sliderValue / 100}turn)`;

  // @TODO add CSS filter to all the items in the list too
  // Look at ItemLists.whatever.querySelectorAll('.item')

  switch (type) {
    case 'accessory':
      Jeff.accessory.style['filter'] = cssFilterValue;
      break;
    case 'top':
      Jeff.top.style['filter'] = cssFilterValue;
      break;
    case 'pants':
      Jeff.pants.style['filter'] = cssFilterValue;
      break;
    case 'shoes':
      Jeff.shoes.style['filter'] = cssFilterValue;
      break;
    default:
      // Some case we haven't handled yet (presumably because we added something new and forgot to update this)
      console.error(`Unimplemented slider target: '${type}'`);
      return;
  }
}

// Expose globally so these functions can be referenced from the HTML
window.onHueSliderChange = onHueSliderChange;
