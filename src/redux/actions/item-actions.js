export const LOAD_ITEMS = 'LOAD_ITEMS';

export const loadItems = () => {
  return dispatch => {
    return fetch('/item')
      .then(res => res.json())
      .then(items => {
        return dispatch({
          type: LOAD_ITEMS,
          items
        });
      });
  };
};
