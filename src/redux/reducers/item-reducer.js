import { LOAD_ITEMS } from '../actions/item-actions';

const initialState = [];

const item = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ITEMS:
      const items = action.items.reduce((items, item) => {
        if (!items[item.category_id]) {
          items[item.category_id] = [];
        }
        items[item.category_id].push(item);
        return items;
      }, {});
      console.log(items);
      return items;
    default:
      return state;
  }
};

export default item;
