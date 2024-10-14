import { Data } from '../data';
import { Jeff, ItemLists } from '../selectors';

// Build item lists
createItemList('accessory', Data.items.accessory, ItemLists.accessory);
createItemList('top', Data.items.top, ItemLists.top);
createItemList('pants', Data.items.pants, ItemLists.pants);
createItemList('shoes', Data.items.shoes, ItemLists.shoes);

/**
 * @param {string} type Type of this list (e.g. "accessory", "top", etc.)
 * @param {typeof Data.items.accessories} data The data to populate this list with
 * @param {Element} itemList HTML Element to build the list into
 */
function createItemList(type, data, itemList) {
  // Convert each datum into HTML and join it all together
  // @TODO Add an extra option for "NONE"
  const listHtml = data
    .map((item, index) => getItemHtml(item, type, index))
    .join('');

  itemList.innerHTML = listHtml;
}

/**
 * Dynamically generate HTML for an Item component
 * @param {typeof Data.items.accessory[0]} itemData
 * @param {string} type Type of this item (e.g. "accessory", "top", etc.)
 * @param {number} index Numeric index of this item in the data list (e.g. 2 = the 3rd item in the list). Used by the "onclick" handler to look up which item was clicked.
 */
function getItemHtml(itemData, type, index) {
  return `
    <div class="item" onclick="onClickItem('${type}', ${index})">
      <img src="${itemData.iconUrl}" class="item__image">
    </div>
  `;
}

/**
 * Callback for when an item is clicked.
 * Updates the Jeff display to change the specified `type` to the item in the specified `index`
 * from the data list.
 * @param {string} type Type of this item (e.g. "accessory", "top", etc.)
 * @param {number} index Numeric index of this item in the data list (e.g. 2 = the 3rd item in the list)
 */
function onClickItem(type, index) {
  let dataItem;
  switch (type) {
    case 'accessory':
      // Look up item in the data
      dataItem = Data.items.accessory[index];
      // Update the image src to the selected item's URL
      Jeff.accessory.src = dataItem.imageUrl;
      break;
    case 'top':
      dataItem = Data.items.top[index];
      Jeff.top.src = dataItem.imageUrl;
      break;
    case 'pants':
      dataItem = Data.items.pants[index];
      Jeff.pants.src = dataItem.imageUrl;
      break;
    case 'shoes':
      dataItem = Data.items.shoes[index];
      Jeff.shoes.src = dataItem.imageUrl;
      break;
    default:
      // Some case we haven't handled yet (presumably because we added something new and forgot to update this)
      console.error(`(onClickItem) Unimplemented item type: '${type}'`)
      return;
  }
}

// Expose globally so these functions can be referenced from the HTML
window.onClickItem = onClickItem;