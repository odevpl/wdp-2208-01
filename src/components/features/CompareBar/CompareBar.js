import React from 'react';
import styles from './CompareBar.module.scss';
import PropTypes from 'prop-types';

import CompareBox from '../../common/CompareBox/CompareBox';

const CompareBar = ({ comparesProducts }) => {
  return (
    <nav className={styles.stickyBar}>
      <ul className={styles.productList}>
        {comparesProducts.map(product => (
          <CompareBox key={product.id} product={product} />
        ))}
      </ul>
    </nav>
  );
};

export default CompareBar;

CompareBar.propTypes = {
  comparesProducts: PropTypes.array,
};
