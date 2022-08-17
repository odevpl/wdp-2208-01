import React from 'react';
import PropTypes from 'prop-types';

import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';
import clsx from 'clsx';
import scssVariables from '../../../styles/settings.scss';
import Swipeable from '../../common/Swipeable/Swipeable';
import CompareBar from '../CompareBar/CompareBar';

import { connect } from 'react-redux';
const mapStateToProps = state => ({
  view: state.view,
});


class NewFurniture extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
    fade: true,
  };

  handlePageChange(newPage) {
    this.setState({ fade: false });
    setTimeout(() => {
      this.setState({ activePage: newPage });
      this.setState({ fade: true });
    }, parseInt(scssVariables.fadeTime));
  }

  handleCategoryChange(newCategory) {
    this.setState({ activeCategory: newCategory });
  }

  render() {

    const { categories, products, compares, showNav, num, isOrange } = this.props;

    const { activeCategory, activePage } = this.state;

    // items displayed on different devices
    let itemsCount;
    if (this.props.view === 'mobile') {
      itemsCount = 1;
    } else if (this.props.view === 'tablet') {
      itemsCount = 3;
    } else {
      itemsCount = num;
    }

    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(categoryProducts.length / itemsCount);

    const comparesProducts = compares;

    const comparesProducts = compares;

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li key={i}>
          <a
            onClick={() => this.handlePageChange(i)}
            className={clsx(
              (i === activePage && styles.active) || '',
              isOrange ? styles.orange : ''
            )}
          >
            page {i}
          </a>
        </li>
      );
    }

    const leftAction = () => {
      this.handlePageChange(activePage + 1);
      if (activePage >= pagesCount - 1) {
        this.handlePageChange(activePage);
      }
    };

    const rightAction = () => {
      this.handlePageChange(activePage - 1);
      if (activePage <= 0) {
        this.handlePageChange(activePage);
      }
    };
    return (
      <div>
        <Swipeable rightAction={rightAction} leftAction={leftAction}>
          <div className={styles.root}>
            <div className='container'>
              <div className={styles.panelBar}>
                <div className='row no-gutters align-items-end'>

                  <div
                    className={clsx(
                      'col-auto',
                      styles.heading,
                      isOrange ? styles.orange : ''
                    )}
                  >
                    <h3>New furniture</h3>
                  </div>
                  <div className={'col ' + styles.menu}>
                    {showNav === true && (
                      <ul>
                        {categories.map(item => (
                          <li key={item.id}>
                            <a
                              className={
                                (item.id === activeCategory && styles.active) || ''
                              }
                              onClick={() => this.handleCategoryChange(item.id)}
                            >
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}

                  </div>
                  <div className={'col-auto ' + styles.dots}>
                    <ul>{dots}</ul>
                  </div>
                </div>
              </div>


              <div className='row'>
                {categoryProducts
                  .slice(activePage * itemsCount, (activePage + 1) * itemsCount)

                  .map(item => (
                    <div key={item.id} className='col col-12 col-md-4 col-lg-3'>
                      <ProductBox {...item} />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </Swipeable>
        {comparesProducts.length > 0 && (
          <CompareBar comparesProducts={comparesProducts} />
        )}
      </div>
    );
  }
}

NewFurniture.propTypes = {
  children: PropTypes.node,
  num: PropTypes.number,
  isOrange: PropTypes.bool,
  showNav: PropTypes.bool,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  compares: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
  view: PropTypes.string,
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
  compares: [],
};

export default connect(mapStateToProps)(NewFurniture);
