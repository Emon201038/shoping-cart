import {
  ADD_PRODUCT,
  ADD_PRODUCT_QUANTITY,
  RECOVER_PRODUCT_QUANTITY,
  REMOVE_PRODUCT_QUANTITY,
} from "./actionTypes";

const initialState = [];

const idGenerator = (state) => {
  const id = state.reduce((maxId, product) => Math.max(maxId, product.id), -1);
  return id + 1;
};

const productReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_PRODUCT:
      return [...state, { ...payload, id: idGenerator(state) }];

    case ADD_PRODUCT_QUANTITY:
      return [
        ...state.map((item) =>
          item.id === payload.id
            ? {
                ...payload,
                quantity: item.quantity + 1,
              }
            : item
        ),
      ];

    case REMOVE_PRODUCT_QUANTITY:
      if (payload.quantity > 0) {
        return [
          ...state.map((item) =>
            item.id === payload.id
              ? { ...payload, quantity: item.quantity - 1 }
              : item
          ),
        ];
      } else {
        return state;
      }

    case RECOVER_PRODUCT_QUANTITY:
      return [
        ...state.map((item) =>
          item.id === payload.id
            ? { ...payload, quantity: item.quantity + payload.cartQuantity }
            : item
        ),
      ];

    default:
      return state;
  }
};

export default productReducer;
