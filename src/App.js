import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import './styles/bootstrap.scss';
import './styles/global.scss';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Homepage from './components/views/Homepage/Homepage';
import ProductList from './components/views/ProductList/ProductList';
import ProductPage from './components/views/ProductPage/ProductPage';

import Blog from './components/views/Blog/Blog';
import ShopPage from './components/views/ShopPage/ShopPage';
import SearchPage from './components/views/SearchPage/SearchPage';

const App = () => (
  <Provider store={store}>
    <main>
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route exact path={'/'} component={Homepage} />
            <Route exact path={'/shop'} component={ShopPage} />
            <Route exact path={'/shop/:categoryId'} component={ProductList} />
            <Route exact path={'/product/:productId'} component={ProductPage} />
            <Route exact path={'/blog'} component={Blog} />
            <Route exact path={'/search'} component={SearchPage} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    </main>
  </Provider>
);

export default App;
