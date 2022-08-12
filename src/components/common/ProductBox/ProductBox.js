import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { toggleProductFavorite } from '../../../redux/productsRedux';
import Stars from '../Stars/Stars';
import { Link } from 'react-router-dom';

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
}) => {
  const dispatch = useDispatch();
  const productId = id;
  const handleCLick = e => {
    e.preventDefault();
    dispatch(toggleProductFavorite(productId));
  };
  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        <Link to={`/product/:${name}`}>
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
        <Link to={`/product/:${name}`}>
          <h5>{name}</h5>
        </Link>
        <Stars stars={stars} userStars={userStars} id={id} />
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button
            variant='outline'
            className={clsx(styles.buttonActive, isFavorite && styles.favorite)}
            onClick={handleCLick}
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
  id: PropTypes.string,
  isFavorite: PropTypes.bool,
  userStars: PropTypes.number,
  compare: PropTypes.string,
  oldPrice: PropTypes.number,
};

export default ProductBox;
