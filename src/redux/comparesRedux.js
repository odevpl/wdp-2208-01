/* selectors */
export const getCount = ({ compares }) => compares.products.length;

/* action name creator */
const reducerName = 'compares';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_PRODUCT = createActionName('ADD_PRODUCT');

/* action creators */
export const addProduct = payload => ({ payload, type: ADD_PRODUCT });

export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_PRODUCT:
      return statePart;

    default:
      return statePart;
  }
}
