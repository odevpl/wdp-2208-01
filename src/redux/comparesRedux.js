/* selectors */

export const getComparesCount = ({ compares }) => compares.length;

export const getCompares = ({ compares }) => compares;

/* action name creator */
const reducerName = 'compares';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_PRODUCT_TO_COMPARES = createActionName('ADD_PRODUCT_TO_COMPARES');
const REMOVE_PRODUCT_FROM_COMPARES = createActionName('REMOVE_PRODUCT_FROM_COMPARES');

/* action creators */
export const addProductToCompares = payload => ({
  payload,
  type: ADD_PRODUCT_TO_COMPARES,
});

export const removeProductFromCompares = payload => ({
  payload,
  type: REMOVE_PRODUCT_FROM_COMPARES,
});

export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_PRODUCT_TO_COMPARES: {
      if (!statePart.find(compare => compare.id === action.payload.id))
        return [...statePart, { ...action.payload }];
      {
        return statePart;
      }
    }
    case REMOVE_PRODUCT_FROM_COMPARES:
      return statePart.filter(compare => compare.id !== action.payload);

    default:
      return statePart;
  }
}
