import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import ProductSearch from '../../features/ProductSearch/ProductSearch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './MenuBar.module.scss';
import { faBars, faHamburger } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

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
            className={`col order-first order-md-last order-xl-first ${styles.searchBox} `}
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
                    <Link
                      to={'/'}
                      className={clsx(styles.menuMobileLink, styles.active)}
                    >
                      Home
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link
                      to={'/shop/furniture'}
                      className={clsx(styles.menuMobileLink)}
                    >
                      Furniture
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to={'/shop/chair'} className={clsx(styles.menuMobileLink)}>
                      Chair
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to={'/shop/table'} className={clsx(styles.menuMobileLink)}>
                      Table
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to={'/shop/sofa'} className={clsx(styles.menuMobileLink)}>
                      Sofa
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to={'/shop/bedroom'} className={clsx(styles.menuMobileLink)}>
                      Bedroom
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to={'/blog'} className={clsx(styles.menuMobileLink)}>
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div
            className={` navbar-expand-md fixed col-auto navbar-default  ${styles.menu}`}
          >
            <div className='align-items-stretch' id='mobile-menu'>
              <ul className=' navbar-nav mr-auto'>
                <li className='nav-item'>
                  <Link to={'/'} className={clsx(styles.menuLink, styles.active)}>
                    Home
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to={'/shop/furniture'} className={clsx(styles.menuLink)}>
                    Furniture
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to={'/shop/chair'} className={clsx(styles.menuLink)}>
                    Chair
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to={'/shop/table'} className={clsx(styles.menuLink)}>
                    Table
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to={'/shop/sofa'} className={clsx(styles.menuLink)}>
                    Sofa
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to={'/shop/bedroom'} className={clsx(styles.menuLink)}>
                    Bedroom
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to={'/blog'} className={clsx(styles.menuLink)}>
                    Blog
                  </Link>
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
