import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductPage.module.scss';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';

const ProductPage = () => {
  return (
    <div className={styles.root}>
      <NewFurniture num={4} showNav={false} />
    </div>
  );
};
// ProductPage.propTypes = {};

export default ProductPage;
