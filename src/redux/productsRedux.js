/* selectors */
export const getAll = ({
  products,
}) => products;
export const getCount = ({
  products,
}) => products.length;

export const getNew = ({
  products,
}) =>
  products.filter(item => item.newFurniture === true);


// actions
const createActionName = actionName => `app/products/${actionName}`;
const TOGGLE_PRODUCT_FAVORITE = createActionName('TOGGLE_PRODUCT_FAVORITE');
const UPDATE_PRODUCT_RATE = createActionName('UPDATE_PRODUCT_RATE');

// action creators
export const toggleProductFavorite = payload => ({
  type: TOGGLE_PRODUCT_FAVORITE,
  payload,
});

export const updateProductRate = payload => ({
  type: UPDATE_PRODUCT_RATE,
  payload,
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case TOGGLE_PRODUCT_FAVORITE:
      return statePart.map(product =>
        product.id === action.payload 
          ? {...product, isFavorite: !product.isFavorite} 
          : product
      );
    case UPDATE_PRODUCT_RATE:
      return statePart.map(product =>
        product.id === action.payload.id ? {
          ...product,
          userStars: action.payload.userStars,
        } :
          product
      );
    default:
      return statePart;
  }
}
