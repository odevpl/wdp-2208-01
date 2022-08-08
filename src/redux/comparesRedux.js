/* selectors */
export const getCount = ({ compares }) => compares.products.length;

/* action name creator */
const reducerName = 'compares';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_PRODUCT = createActionName('ADD_PRODUCT');

/* action creators */
export const addProduct = payload => ({ payload, type: ADD_PRODUCT });

const comparesReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      statePart.map();
    default:
      return statePart;
  }
};

export default comparesReducer;
