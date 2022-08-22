import React from 'react';
import { useSelector } from 'react-redux';
import BrandBox from '../../common/BrandBox/BrandBox';
import Button from '../../common/Button/Button';
import { getAllBrands } from '../../../redux/brandsRedux';

import styles from './BrandsBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const BrandsBar = () => {
  const brands = useSelector(getAllBrands);

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.brands}>
          <Button className={styles.brandsBtn} noHover variant='small'>
            <FontAwesomeIcon icon={faAngleLeft} />
          </Button>
          {brands.map(brand => (
            <BrandBox key={brand.id} {...brand} />
          ))}
          <Button className={styles.brandsBtn} noHover variant='small'>
            <FontAwesomeIcon icon={faAngleRight} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BrandsBar;
