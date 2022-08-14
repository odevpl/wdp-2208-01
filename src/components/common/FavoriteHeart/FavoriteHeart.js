import React from 'react';
import styles from './FavoriteHeart.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

const FavoriteHeart = props => {
  return (
    <Button className={props.isFavorite ? styles.favorite : ''} variant='outline'>
      <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
    </Button>
  );
};

FavoriteHeart.propTypes = {
  isFavorite: PropTypes.bool,
};

export default FavoriteHeart;
