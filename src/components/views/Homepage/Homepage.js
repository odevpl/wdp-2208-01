import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import BrandsBar from '../../layout/BrandsBar/BrandsBar';
import Feedback from '../../layout/Feedback/Feedback';

const Homepage = () => (
  <div className={styles.root}>
    <FeatureBoxes />
    <NewFurniture />
    <BrandsBar />
    <Feedback />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
