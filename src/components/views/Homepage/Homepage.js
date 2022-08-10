import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Gallery from '../../layout/Gallery/Gallery';
import Feedback from '../../features/Feedback/Feedback';

const Homepage = () => {
  return (
    <div className={styles.root}>
      <FeatureBoxes />
      <NewFurniture />
      <Gallery />
      <Feedback />
    </div>
  );
};

// Homepage.propTypes = {};

export default Homepage;
