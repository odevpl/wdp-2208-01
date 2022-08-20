import React, { useState, startTransition } from 'react';

import PropTypes from 'prop-types';
import { toggleProductFavorite } from '../../../redux/productsRedux';
import clsx from 'clsx';
import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExchangeAlt,
  faShoppingBasket,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Button from '../Button/Button';
import { addProductToCompares, getComparesCount } from '../../../redux/comparesRedux';

import { useDispatch, useSelector } from 'react-redux';
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
  category,
  isFavorite,
  compare,
  userStars,
  oldPrice,
  newFurniture,
}) => {
  const comparesLength = useSelector(state => getComparesCount(state));
  const dispatch = useDispatch();
  const productId = id;

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

  const [show, setShow] = useState(false);

  const handleShow = e => {
    e.preventDefault();
    setShow(true);
  };

  const handleClose = e => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    setShow(false);
  };

  const handleCLick = e => {
    e.preventDefault();
    dispatch(toggleProductFavorite(productId));
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
        <Link to={`/product/${name}`}>
          <img
            className={styles.image}
            alt={name}
            src={`${process.env.PUBLIC_URL}/images/products/${name}.jpg`}
          />
        </Link>
        {promo && <div className={styles.sale}>{promo}</div>}
        <div className={styles.buttons}>
          <Button variant='small' onClick={handleShow}>
            Quick View
          </Button>
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

      <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header
          className={styles.modalHeader}
          closeButton
          onClick={handleClose}
        />
        <Modal.Body className='show-grid'>
          <Container>
            <Row>
              <Col xs={12} md={6} className={styles.modalLeftColumn}>
                <img
                  className={styles.image}
                  alt={name}
                  src={`${process.env.PUBLIC_URL}/images/products/${name}.jpg`}
                />
              </Col>

              <Col xs={12} md={6} className={styles.modalRightColumn}>
                <h3 className={styles.modalCategory}>Category: {category}</h3>
                <h3 className={styles.modalHeader}>{name}</h3>
                <div className={styles.modalPriceStarsDiv}>
                  <div>
                    <div className={styles.modalPrice}>
                      {oldPrice && (
                        <span className={styles.modalOldPrice + ' mx-1'}>
                          $ {oldPrice}
                        </span>
                      )}
                      <Button noHover variant='small'>
                        $ {price}
                      </Button>
                    </div>
                  </div>
                  <div>
                    <Stars stars={stars} userStars={userStars} id={id} />
                  </div>
                </div>

                <p>
                  <span className={styles.modalDescription}>Description: </span>Lorem
                  ipsum, or lipsum as it is sometimes known, is dummy text used in
                  laying out print, graphic or web designs.
                </p>

                <div className={styles.outlines}>
                  <Button
                    variant='outline'
                    className={clsx(
                      styles.buttonActive,
                      isFavorite && styles.modalFavorite
                    )}
                    onClick={handleCLick}
                  >
                    <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>

        <Modal.Footer>
          <Button variant='small'>
            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon> VIEW PRODUCT PAGE
          </Button>
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </Modal.Footer>
      </Modal>
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
  id: PropTypes.string,
  category: PropTypes.string,
  isFavorite: PropTypes.bool,
  userStars: PropTypes.number,
  oldPrice: PropTypes.number,
  id: PropTypes.string,
  newFurniture: PropTypes.bool,
  category: PropTypes.string,
};

export default ProductBox;
