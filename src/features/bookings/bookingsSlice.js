import { ADD_ITEM, CURRENT_ITEM, REMOVE_ITEM } from '../../constants';

export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};

export const removeItem = (itemId) => {
  return {
    type: REMOVE_ITEM,
    payload: itemId,
  };
};

export const currentItem = (item) => {
  return {
    type: CURRENT_ITEM,
    payload: item,
  };
};
