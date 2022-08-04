import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import styles from './ProductSearch.module.scss';

const ProductSearch = () => (
  <form action='' className={styles.root}>
    <div className={styles.category}>
      <FontAwesomeIcon className={styles.icon} icon={faListUl} />

      <ul id='dropmenu'>
        <li>Select category</li>
        <ul>
          <li>
            <a href='#'>Furniture</a>
          </li>
          <li>
            <a href='#'>Chair</a>
          </li>
          <li>
            <a href='#'>Table</a>
          </li>
          <li>
            <a href='#'>Sofa</a>
          </li>
          <li>
            <a href='#'>Bedroom</a>
          </li>
        </ul>
      </ul>

      <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
    </div>
    <div className={styles.searchField}>
      <input placeholder='Search products...' type='text' />
      <button>
        <FontAwesomeIcon className={styles.icon} icon={faSearch} />
      </button>
    </div>
  </form>
);

ProductSearch.propTypes = {
  children: PropTypes.node,
};

export default ProductSearch;
