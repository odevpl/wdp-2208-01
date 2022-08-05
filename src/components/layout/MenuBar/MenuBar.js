import React from 'react';
import PropTypes from 'prop-types';

import ProductSearch from '../../features/ProductSearch/ProductSearch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './MenuBar.module.scss';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const MenuBar = ({ children }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row align-items-center'>
        <div
          className={`col order-first order-md-last order-xl-first ${styles.searchBox} `}
        >
          <ProductSearch />
        </div>
        <nav className={`col-auto  ${styles.menu} navbar navbar-expand-md fixed`}>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#mobile-menu'
            aria-controls='mobile-menu'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className={`navbar-toggler-icon ${styles.span_icon}`}>
              <FontAwesomeIcon className={styles.icon} icon={faBars} />
            </span>
          </button>
          <div
            className='collapse navbar-collapse align-items-stretch'
            id='mobile-menu'
          >
            <ul className='nav navbar-nav'>
              <li>
                <a href='#' className={styles.active}>
                  Home
                </a>
              </li>
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
              <li>
                <a href='#'>Blog</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>
);

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
