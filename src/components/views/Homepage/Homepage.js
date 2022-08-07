import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';

const Homepage = () => {
  return (
    <div className={styles.root}>
      <FeatureBoxes />
      <NewFurniture />
    </div>
  );
};

// Homepage.propTypes = {};

export default Homepage;
