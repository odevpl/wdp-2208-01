import styles from './PriceButton.module.scss';
import Button from '../Button/Button';
import React from 'react';
import PropTypes from 'prop-types';

const PriceButton = props => {
  return (
    <div className={styles.price}>
      {props.oldPrice && (
        <span className={styles.oldPrice + ' mx-1'}>$ {props.oldPrice}</span>
      )}
      <Button noHover variant='small'>
        $ {props.price}
      </Button>
    </div>
  );
};

PriceButton.propTypes = {
  oldPrice: PropTypes.number,
  price: PropTypes.number,
};

export default PriceButton;
