import React from 'react';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/productsRedux';

import Button from '../../common/Button/Button';

import styles from './Promoted.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye,
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import { useDispatch } from 'react-redux';
import { toggleProductFavorite } from '../../../redux/productsRedux';
import { getView } from '../../../redux/viewRedux';
import Swipeable from '../../common/Swipeable/Swipeable';
const Promoted = () => {
  const products = useSelector(state => getAll(state));
  console.log('products', products[1].name);

  const dispatch = useDispatch();
  const productId = products[1].id;
  const handleCLick = e => {
    e.preventDefault();
    dispatch(toggleProductFavorite(productId));
  };
  const view = useSelector(state => getView(state));
  const leftAction = () => {
    console.log('Change slide to left');
  };
  const rightAction = () => {
    console.log('Change slide to right');
  };
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className={clsx('col-4', view === 'mobile' && styles.hide)}>
            <div className={styles.leftColumn}>
              <div className={styles.headerLeftColumn}>
                <h2>Hot deals</h2>
                <div className={styles.headerDots}>
                  <div className={clsx(styles.headerDot, styles.active)}></div>
                  <div className={styles.headerDot}></div>
                  <div className={styles.headerDot}></div>
                </div>
              </div>
              <div className={styles.imageLeftColumn}>
                <img
                  className={styles.imageLeft}
                  src={`${process.env.PUBLIC_URL}/images/products/Aenean Ru Bristique 1.jpg`}
                  alt='Aenean Ru Bristique'
                />
                <div className={styles.imageLeftContent}>
                  <Button variant='small' className={styles.addToCartBtn}>
                    <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon>
                    <span>ADD TO CART</span>
                  </Button>
                  <div className={styles.imageDots}>
                    <div className={styles.imageDot}>
                      <span className={styles.imageDotNumber}>25</span>Days
                    </div>
                    <div className={styles.imageDot}>
                      <span className={styles.imageDotNumber}>10</span>Hrs
                    </div>
                    <div className={styles.imageDot}>
                      <span className={styles.imageDotNumber}>45</span>Mins
                    </div>
                    <div className={styles.imageDot}>
                      <span className={styles.imageDotNumber}>30</span>Secs
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.descriptionLeftColumn}>
                <div>
                  <h5>{products[1].name}</h5>
                  <div className={styles.stars}>
                    {[1, 2, 3, 4, 5].map(i => (
                      <a key={i} href='#'>
                        {i <= products[1].stars ? (
                          <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
                        ) : (
                          <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
                        )}
                      </a>
                    ))}
                  </div>
                  <div className={styles.line}></div>
                  <div className={styles.actions}>
                    <div className={styles.outlines}>
                      <Button variant='outline'>
                        <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                      </Button>
                      <Button
                        variant='outline'
                        className={clsx(
                          styles.buttonActive,
                          products[1].isFavorite && styles.favorite
                        )}
                        onClick={handleCLick}
                      >
                        <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
                      </Button>
                      <Button
                        className={products[1].compare ? styles.compare : ''}
                        variant='outline'
                      >
                        <FontAwesomeIcon icon={faExchangeAlt}>
                          Add to compare
                        </FontAwesomeIcon>
                      </Button>
                    </div>
                    <div className={styles.price}>
                      {products[1].oldPrice && (
                        <span className={styles.oldPrice + ' mx-1'}>
                          $ {products[1].oldPrice}
                        </span>
                      )}
                      <Button noHover variant='small'>
                        $ {products[1].price}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col'>
            <Swipeable rightAction={rightAction} leftAction={leftAction}>
              <div className={styles.rightColumn}>
                <div className={styles.imageRightColumn}>
                  <img
                    className={styles.imageRight}
                    src={`${process.env.PUBLIC_URL}/images/products/Aenean Ru Bristique 18.jpg`}
                    alt='Aenean Ru Bristique'
                  />
                  <div className={styles.hero}>
                    <h1>
                      Indoor<span> Furniture</span>
                    </h1>
                    <h2>Save up to 50% of all furniture</h2>
                    <button className={styles.heroButton}>Shop now</button>
                  </div>
                </div>
                <div className={styles.imageArrows}>
                  <button className={styles.arrowLeft}>&#60;</button>
                  <button className={styles.arrowRight}>&#62;</button>
                </div>
              </div>
            </Swipeable>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promoted;
