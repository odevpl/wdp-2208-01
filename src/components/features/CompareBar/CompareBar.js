import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';
import React, { useEffect } from 'react';
import styles from './CompareBar.module.scss';
import PropTypes from 'prop-types';

const CompareBar = ({ comparesProducts }) => {
  return (
    <nav className={styles.stickyBar}>
      <ul className={styles.productList}>
        {comparesProducts.map(product => (
          <li key={product.id}>
            <img
              alt={product.name}
              src={`${process.env.PUBLIC_URL}/images/products/${product.name}.jpg`}
            />

            <Button variant='outline' className={styles.icon}>
              <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CompareBar;

CompareBar.propTypes = {
  comparesProducts: PropTypes.object,
};
