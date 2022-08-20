/* selectors */
export const getGalleryProducts = ({ galleryProducts }) => galleryProducts;
export const getGalleryTypes = ({ galleryTypes }) => galleryTypes;

const createActionName = actionName => `app/galleryProducts/${actionName}`;

const UPDATE_GALLERY_PRODUCT_RATE = createActionName('UPDATE_GALLERY_PRODUCT_RATE');

export const updateGalleryProductRate = payload => ({
  type: UPDATE_GALLERY_PRODUCT_RATE,
  payload,
});

export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case UPDATE_GALLERY_PRODUCT_RATE:
      return statePart.map(product =>
        product.id === action.payload.id
          ? {
              ...product,
              userStars: action.payload.userStars,
            }
          : product
      );
    default:
      return statePart;
  }
}
