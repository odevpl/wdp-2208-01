import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ProductSearch from '../../features/ProductSearch/ProductSearch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './MenuBar.module.scss';
import { faBars, faHamburger } from '@fortawesome/free-solid-svg-icons';
// import { Nav, Navbar } from 'react-bootstrap';

const MenuBar = ({ children }) => {
  const [show, setShow] = useState(false);

  const handleToggleMenu = e => {
    e.preventDefault();
    if (!show) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row align-items-center'>
          <div
            className={`col order-first order-md-last order-lg-first ${styles.searchBox} `}
          >
            <ProductSearch />
          </div>

          <div className={styles.mobile_menu}>
            <button className={styles.collapse_icon} onClick={handleToggleMenu}>
              <span>
                <FontAwesomeIcon className={styles.icon} icon={faBars} />
              </span>
            </button>

            {show && (
              <div
                className={`${styles.collapse_list} align-items-stretch`}
                id='mobile-menu'
              >
                <ul className='navbar-nav mr-auto'>
                  <li className='nav-item'>
                    <a href='#' className={styles.active}>
                      Home
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='#'>Furniture</a>
                  </li>
                  <li className='nav-item'>
                    <a href='#'>Chair</a>
                  </li>
                  <li className='nav-item'>
                    <a href='#'>Table</a>
                  </li>
                  <li className='nav-item'>
                    <a href='#'>Sofa</a>
                  </li>
                  <li className='nav-item'>
                    <a href='#'>Bedroom</a>
                  </li>
                  <li className='nav-item'>
                    <a href='#'>Blog</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div
            className={` navbar-expand-md fixed col-auto navbar-default align-items-stretch ${styles.menu}`}
          >
            <div className='align-items-stretch' id='mobile-menu'>
              <ul className=' navbar-nav mr-auto'>
                <li className='nav-item'>
                  <a href='#' className={styles.active}>
                    Home
                  </a>
                </li>
                <li className='nav-item'>
                  <a href='#'>Furniture</a>
                </li>
                <li className='nav-item'>
                  <a href='#'>Chair</a>
                </li>
                <li className='nav-item'>
                  <a href='#'>Table</a>
                </li>
                <li className='nav-item'>
                  <a href='#'>Sofa</a>
                </li>
                <li className='nav-item'>
                  <a href='#'>Bedroom</a>
                </li>
                <li className='nav-item'>
                  <a href='#'>Blog</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
