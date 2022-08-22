import React from 'react';
import styles from './SearchPage.module.scss';

// import PropTypes from 'prop-types';

import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';

const SearchPage = () => (
  <div className={styles.root}>
    <NewFurniture num={8} isOrange={true} />
  </div>
);

// SearchPage.propTypes = {};

export default SearchPage;
