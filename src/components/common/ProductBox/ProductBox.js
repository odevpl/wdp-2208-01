import React, { startTransition } from 'react';
import PropTypes from 'prop-types';
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

const ProductBox = ({
  name,
  price,
  promo,
  stars,
  id,
  favorite,
  compare,
  oldPrice,
  newFurniture,
  category,
}) => {
  const comparesLength = useSelector(state => getCount(state));
  console.log(comparesLength);
  const dispatch = useDispatch();

  const compareProduct = {
    id: id,
    name: name,
    price: price,
    promo: promo,
    stars: stars,
    favorite: favorite,
    compare: compare,
    newFurniture: newFurniture,
    category: category,
  };

  const handleCLickCompare = e => {
    e.preventDefault();
    if (comparesLength < 4) {
      console.log(comparesLength);
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
          <Button className={favorite ? styles.favorite : ''} variant='outline'>
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button
            className={compare ? styles.compare : ''}
            variant='outline'
            onClick={handleCLickCompare}
          >
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
  favorite: PropTypes.string,
  compare: PropTypes.string,
  oldPrice: PropTypes.number,
  id: PropTypes.string,
  newFurniture: PropTypes.bool,
  category: PropTypes.string,
};

export default ProductBox;
