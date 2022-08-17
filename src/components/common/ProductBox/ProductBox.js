import React, { useState, startTransition } from 'react';

import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';

import {
  addProductToCompares,
  getComparesCount,
  getCount,
} from '../../../redux/comparesRedux';

import { useDispatch, useSelector } from 'react-redux';
import { toggleProductFavorite } from '../../../redux/productsRedux';
import Stars from '../Stars/Stars';
import { Link } from 'react-router-dom';
import FavoriteHeart from '../FavoriteHeart/FavoriteHeart';
import PriceButton from '../PriceButton/PriceButton';

const ProductBox = ({
  name,
  price,
  promo,
  stars,
  id,
  isFavorite,
  compare,
  userStars,
  oldPrice,
  newFurniture,
  category,
}) => {
  const comparesLength = useSelector(state => getComparesCount(state));
  const dispatch = useDispatch();

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

  const productId = id;
  const handleCLick = e => {
    e.preventDefault();
    dispatch(toggleProductFavorite(productId));
  };

  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        <Link to={`/product/${name}`}>
          <img
            className={styles.image}
            alt={name}
            src={`${process.env.PUBLIC_URL}/images/products/${name}.jpg`}
          />
        </Link>
        {promo && <div className={styles.sale}>{promo}</div>}
        <div className={styles.buttons}>
          <Button variant='small'>Quick View</Button>
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        <Link to={`/product/${name}`}>
          <h5>{name}</h5>
        </Link>
        <Stars stars={stars} userStars={userStars} id={id} />
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button
            className={clsx(styles.buttonActive, isFavorite && styles.favorite)}
            onClick={handleCLick}
            variant='outline'
          >
            <FontAwesomeIcon isFavorite={isFavorite} icon={faHeart}>
              Favorite
            </FontAwesomeIcon>
          </Button>
          <Button
            className={compare ? styles.compare : ''}
            variant='outline'
            onClick={handleCLickCompare}
          >
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
        </div>
        <PriceButton price={price} oldPrice={oldPrice} />
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
  compare: PropTypes.bool,
  isFavorite: PropTypes.bool,
  userStars: PropTypes.number,
  oldPrice: PropTypes.number,
  id: PropTypes.string,
  newFurniture: PropTypes.bool,
  category: PropTypes.string,
};

export default ProductBox;
