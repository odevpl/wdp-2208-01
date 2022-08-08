import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Gallery from '../../layout/Gallery/Gallery';

const Homepage = () => {
  return (
    <div className={styles.root}>
      <FeatureBoxes />
      <NewFurniture />
      <Gallery />
    </div>
  );
};

// Homepage.propTypes = {};

export default Homepage;
