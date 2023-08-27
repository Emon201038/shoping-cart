import { ADD_TO_CART, DELETE_CART, REMOVE_CART } from "./actionTypes";

const initialState = [];

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  const copiedState = [...state];

  const isExist = (state, payload) =>
    state.some((item) => item.id === payload.id);

  switch (type) {
    case ADD_TO_CART:
      if (isExist(state, payload)) {
        if (payload.quantity <= 0) {
          return state;
        }
        return copiedState.map((item) =>
          item.id === payload.id
            ? {
                ...item,
                cartQuantity: item.cartQuantity + 1,
                quantity: item.quantity - 1,
              }
            : item
        );
      } else {
        copiedState.push({
          ...payload,
          cartQuantity: 1,
          quantity: payload.quantity - 1,
        });
        return copiedState;
      }

    case REMOVE_CART:
      return copiedState.map((item) =>
        item.id === payload.id
          ? {
              ...item,
              cartQuantity: item.cartQuantity - 1,
              quantity: item.quantity + 1,
            }
          : item
      );

    case DELETE_CART:
      return copiedState.filter((item) => item.id !== payload.id);

    default:
      return state;
  }
};

export default cartReducer;
