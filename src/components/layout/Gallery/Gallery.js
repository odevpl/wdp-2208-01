import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getGalleryData } from '../../../redux/galleryRedux';
import styles from './Gallery.module.scss';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import {
  faEye,
  faExchangeAlt,
  faShoppingBasket,
  faStar,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const Gallery = () => {
  const galleryData = useSelector(state => getGalleryData(state));
  const [selectedThumb, setSelectedThumb] = useState(galleryData.products[0].name);
  console.log(selectedThumb);

  const [selectedType, setSelectedType] = useState(galleryData.types[0].id);

  const handleTypeChange = category => {
    setSelectedType(category);
    console.log(selectedType);
    setSelectedThumb(
      galleryData.products.find(product => product.type === category).name
    );
  };

  const typeProducts = galleryData.products.filter(
    product => product.type === selectedType
  );

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className={`left-section col-6 ${styles.section}`}>
            <div className={styles.panelBar}>
              <div className='row no-gutters align-items-end'>
                <div className={`col-12 ${styles.heading}`}>
                  <h3>Furniture gallery</h3>
                </div>
              </div>
            </div>
            <div className={`${styles.categoryContainer} category-container p-0`}>
              <ul className={styles.categoryList}>
                {galleryData.types.map(category => (
                  <li
                    key={category.id}
                    onClick={() => handleTypeChange(category.id)}
                    className={`${styles.item} ${
                      category.id === selectedType ? styles.activeCategory : ''
                    }`}
                  >
                    <button className={styles.button}>
                      <a>{category.name}</a>
                    </button>
                  </li>
                ))}
              </ul>

              <div className={styles.imageContainer}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/products/${selectedThumb}.jpg`}
                />
                <div className={styles.buttons}>
                  <Button variant='outline' className={styles.actionButton}>
                    <FontAwesomeIcon icon={faHeart} />
                  </Button>
                  <Button variant='outline' className={styles.actionButton}>
                    <FontAwesomeIcon icon={faExchangeAlt} />
                  </Button>
                  <Button variant='outline' className={styles.actionButton}>
                    <FontAwesomeIcon icon={faEye} />
                  </Button>
                  <Button variant='outline' className={styles.actionButton}>
                    <FontAwesomeIcon icon={faShoppingBasket} />
                  </Button>
                </div>

                <div className={styles.productInfo}>
                  <div className={styles.sale}>
                    <h4>$120.00</h4>
                    <h5>
                      $<span>160.00</span>
                    </h5>
                  </div>
                  <div className={styles.productCart}>
                    <p>Aenean Ru Bristique</p>
                    <div>
                      <FontAwesomeIcon icon={faStar}> stars</FontAwesomeIcon>
                      <FontAwesomeIcon icon={faStar}> stars</FontAwesomeIcon>
                      <FontAwesomeIcon icon={farStar}> stars</FontAwesomeIcon>
                      <FontAwesomeIcon icon={farStar}> stars</FontAwesomeIcon>
                      <FontAwesomeIcon icon={farStar}> stars</FontAwesomeIcon>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.slider}>
                <Button className={styles.buttonLeftArrow}>
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    className={styles.icon}
                  ></FontAwesomeIcon>
                </Button>

                {typeProducts.map(product => (
                  <img
                    key={product.id}
                    className={`${styles.imageThumbnail} ${
                      product.name === selectedThumb ? styles.active : ''
                    }`}
                    onClick={() => setSelectedThumb(product.name)}
                    src={`${process.env.PUBLIC_URL}/images/products/${product.name}.jpg`}
                  />
                ))}
                {/* {selectedCategory === 'featured' &&
                  galleryData.featured.map(product => (
                    <img
                      key={product.id}
                      className={`${styles.imageThumbnail} ${
                        product.id === selectedThumb ? styles.active : ''
                      }`}
                      onClick={() => setSelectedThumb(product.id)}
                      src={`${process.env.PUBLIC_URL}/images/products/${product.name}.jpg`}
                    />
                  ))} */}
                <Button className={styles.buttonRightArrow}>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className={styles.icon}
                  ></FontAwesomeIcon>
                </Button>
              </div>
            </div>
          </div>
          <div className={`right-section col-6 ${styles.section}`}>
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
                  SHOP NOW
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
