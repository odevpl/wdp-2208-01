import React from 'react';

import styles from './BrandBox.module.scss';

const BrandBox = brand => (
  <div className={styles.root}>
    <div className={styles.box}>
      <img src={brand.image} alt={brand.name} />
    </div>
  </div>
);

export default BrandBox;
