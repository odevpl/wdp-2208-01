import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import styles from './ProductSearch.module.scss';

const ProductSearch = () => {
  return (
    <form action='' className={styles.root}>
      <div className={styles.category}>
        <FontAwesomeIcon className={styles.icon} icon={faListUl} />

        <ul className={styles.dropdownMenu}>
          <li>
            Select category
            <ul className={styles.dropdownElements}>
              <li>Furniture</li>
              <li>Chair</li>
              <li>Table</li>
              <li>Sofa</li>
              <li>Bedroom</li>
            </ul>
            <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
          </li>
        </ul>
      </div>

      <div className={styles.searchField}>
        <input placeholder='Search products...' type='text' />
        <Link to={'/search'}>
          <FontAwesomeIcon icon={faSearch} className={styles.icon} />
        </Link>
      </div>
    </form>
  );
};

ProductSearch.propTypes = {
  children: PropTypes.node,
};

export default ProductSearch;
