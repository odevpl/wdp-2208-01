import { combineReducers, createStore } from 'redux';
import initialState from './initialState';

import cartReducer from './cartRedux';
import categoriesReducer from './categoriesRedux';
import productsReducer from './productsRedux';
import feedbackReducer from './feedbackRedux';
import comparesReducer from './comparesRedux';

import viewReducer from './viewRedux';

import dealsReducer from './dealsRedux';
import blogReducer from './blogRedux';
import galleryProductsReducer from './galleryProductsRedux';
import brandsReducer from './brandsRedux';
import promotedDealsReducer from './promotedDealsRedux';

// define reducers
const reducers = {
  cart: cartReducer,
  categories: categoriesReducer,
  products: productsReducer,
  feedback: feedbackReducer,
  compares: comparesReducer,
  view: viewReducer,
  deals: dealsReducer,
  blog: blogReducer,
  galleryProducts: galleryProductsReducer,
  brands: brandsReducer,
  promotedDeals: promotedDealsReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

// create store
const store = createStore(
  combinedReducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
