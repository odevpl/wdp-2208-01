/* selectors */
export const getCount = ({ compares }) => compares.length;

/* action name creator */
const reducerName = 'compares';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_PRODUCT_TO_COMPARES = createActionName('ADD_PRODUCT_TO_COMPARES');

/* action creators */
export const addProductToCompares = payload => ({
  payload,
  type: ADD_PRODUCT_TO_COMPARES,
});

export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_PRODUCT_TO_COMPARES:
      return [...statePart, { ...action.payload }];

    default:
      return statePart;
  }
}
