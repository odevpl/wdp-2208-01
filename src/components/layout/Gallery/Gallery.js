import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getGalleryData } from '../../../redux/galleryRedux';
import SaleOff from '../SaleOff/SaleOff';
import styles from './Gallery.module.scss';

const Gallery = () => {
  const galleryData = useSelector(state => getGalleryData(state));

  const [showFeatured, setShowFeatured] = useState(false);
  const [showTopSeller, setShowTopSeller] = useState(true);
  const [showSaleOff, setShowSaleOff] = useState(true);
  const [showTopRated, setShowTopRated] = useState(false);

  const handleChangeCategory = () => {
    console.log(galleryData);
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='left-section col-6'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={`col-12 ${styles.heading}`}>
                <h3>Furniture gallery</h3>
              </div>
            </div>
          </div>
          <div className='category-container p-0'>
            <ul className={styles.categoryList}>
              {galleryData.categories.map(category => (
                <li key={category.id} className={styles.item}>
                  <button className={styles.button}>
                    <a onClick={handleChangeCategory}>{category.name}</a>
                  </button>
                </li>
              ))}
            </ul>
            {showSaleOff && <SaleOff />}
          </div>
        </div>
        <div className='right-section col-6'>
          <div className={styles.photo}>
            <img
              className={styles.image}
              alt='Aenean Ru Bristique 20'
              src={`${process.env.PUBLIC_URL}/images/products/Aenean Ru Bristique 20.jpg`}
            />
            <div className={styles.sale}>
              <h4>
                from <span>$50.80</span>
              </h4>
            </div>
            <h2 className={styles.name}>Bedroom Bed</h2>
            <button className={styles.button}>
              <a className={styles.link} href='#'>
                Shop now
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
