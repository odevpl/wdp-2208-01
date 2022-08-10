import React, { startTransition, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import { addProductToCompares, getCount } from '../../../redux/comparesRedux';
import { useDispatch, useSelector } from 'react-redux';
import { toggleProductFavorite } from '../../../redux/productsRedux';

const ProductBox = ({
  name,
  price,
  promo,
  stars,
  id,
  isFavorite,
  compare,
  oldPrice,
  newFurniture,
  category,
}) => {
  const comparesLength = useSelector(state => getCount(state));

  const dispatch = useDispatch();

  const productId = id;
  const handleCLick = e => {
    e.preventDefault();
    dispatch(toggleProductFavorite(productId));
  };

  const compareProduct = {
    id: id,
    name: name,
    price: price,
    promo: promo,
    stars: stars,
    favorite: isFavorite,
    compare: compare,
    newFurniture: newFurniture,
    category: category,
  };

  const handleCLickCompare = e => {
    e.preventDefault();
    if (comparesLength < 4) {
      dispatch(addProductToCompares(compareProduct));
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        <img
          className={styles.image}
          alt={name}
          src={`${process.env.PUBLIC_URL}/images/products/${name}.jpg`}
        />
        {promo && <div className={styles.sale}>{promo}</div>}
        <div className={styles.buttons}>
          <Button variant='small'>Quick View</Button>
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        <h5>{name}</h5>
        <div className={styles.stars}>
          {[1, 2, 3, 4, 5].map(i => (
            <a key={i} href='#'>
              {i <= stars ? (
                <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
              ) : (
                <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
              )}
            </a>
          ))}
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button
            className={clsx(styles.buttonActive, isFavorite && styles.favorite)}
            onClick={handleCLick}
            variant='outline'
          >
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button
            className={compare ? styles.compare : ''}
            variant='outline'
            onClick={handleCLickCompare}
          >
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button className={compare ? styles.compare : ''} variant='outline'>
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
        </div>
        <div className={styles.price}>
          {oldPrice && <span className={styles.oldPrice + ' mx-1'}>$ {oldPrice}</span>}
          <Button noHover variant='small'>
            $ {price}
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductBox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  isFavorite: PropTypes.bool,
  compare: PropTypes.string,
  oldPrice: PropTypes.number,
  id: PropTypes.string,
  newFurniture: PropTypes.bool,
  category: PropTypes.string,
};

export default ProductBox;
