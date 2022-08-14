import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Homepage.module.scss';
import Promoted from '../../features/Promoted/Promoted';
import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Feedback from '../../features/Feedback/Feedback';
import Deals from '../../features/Deals/Deals';
import Blog from '../../features/Blog/Blog';

const Homepage = () => (
  <div className={styles.root}>
    <Promoted />
    <FeatureBoxes />
    <Deals />
    <NewFurniture num={8} showNav={true} isOrange={true} />
    <Blog />
    <Feedback />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
