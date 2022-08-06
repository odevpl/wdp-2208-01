import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ProductSearch from '../../features/ProductSearch/ProductSearch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './MenuBar.module.scss';
import { faBars } from '@fortawesome/free-solid-svg-icons';
// import { Nav, Navbar } from 'react-bootstrap';

const MenuBar = ({ children }) => {
  const [show, setShow] = useState(false);

  const toggleMenu = () => {};

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row align-items-center'>
          <div
            className={`col order-first order-md-last order-xl-first ${styles.searchBox} `}
          >
            <ProductSearch />
          </div>

          {/* <div className='hamburgerMenu'>
          <Navbar collapseOnSelect expand='lg'>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='mr-auto list'>
                <Nav.Link href='#' className={`${styles.listElement} ${styles.active}`}>
                  Home
                </Nav.Link>
                <Nav.Link href='#' className={`${styles.listElement} `}>
                  Furniture
                </Nav.Link>
                <Nav.Link href='#' className={`${styles.listElement}`}>
                  Chair
                </Nav.Link>
                <Nav.Link href='#'>Table</Nav.Link>
                <Nav.Link href='#'>Sofa</Nav.Link>
                <Nav.Link href='#'>Bedroom</Nav.Link>
                <Nav.Link href='#'>Blog</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div> */}

          <button className={styles.hamburgerMenu}>
            <span>
              <FontAwesomeIcon className={styles.icon} icon={faBars} />
            </span>
          </button>
          <div
            className={`${styles.collapse_list} align-items-stretch`}
            id='mobile-menu'
          >
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

        <div
          className={`navbar navbar-expand-md fixed col-auto navbar-default  ${styles.menu}`}
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
  );
};

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
