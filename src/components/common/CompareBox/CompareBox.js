import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';
import { useDispatch } from 'react-redux';
import styles from './CompareBox.module.scss';
import React from 'react';
import { removeProductFromCompares } from '../../../redux/comparesRedux';
import PropTypes from 'prop-types';
import FavoriteHeart from '../FavoriteHeart/FavoriteHeart';
import PriceButton from '../PriceButton/PriceButton';

const CompareBox = ({ product }) => {
  const dispatch = useDispatch();

  const handleCLickDelete = e => {
    e.preventDefault();
    dispatch(removeProductFromCompares(product.id));
  };

  return (
    <li key={product.id}>
      <div className={styles.photo}>
        <img
          alt={product.name}
          src={`${process.env.PUBLIC_URL}/images/products/${product.name}.jpg`}
        />
        <Button
          variant='outline'
          className={styles.iconClose}
          onClick={handleCLickDelete}
        >
          <FontAwesomeIcon icon={faWindowClose}></FontAwesomeIcon>
        </Button>
      </div>
      <div className={styles.description}>
        <Button variant='outline' className={styles.icon}>
          <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
        </Button>
        <FavoriteHeart isFavorite={product.favorite} />
        <PriceButton price={product.price} oldPrice={product.oldPrice} />
      </div>
      <p className={styles.name}>
        <span>{product.name}</span>
      </p>
    </li>
  );
};

export default CompareBox;

CompareBox.propTypes = {
  product: PropTypes.object,
};
