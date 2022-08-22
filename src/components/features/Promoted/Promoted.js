import React from 'react';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/productsRedux';
import { getPromotedDeals } from '../../../redux/promotedDealsRedux';
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

import styles from './Promoted.module.scss';
import Button from '../../common/Button/Button';
import Stars from '../../common/Stars/Stars';
import PriceButton from '../../common/PriceButton/PriceButton';

import { Swiper, SwiperSlide } from 'swiper/react';
import '../../../../node_modules/swiper/swiper.scss';
import SwiperCore, { Navigation, EffectFade, Autoplay, Pagination } from 'swiper';
import '../../../../node_modules/swiper/modules/navigation/navigation.scss';
import '../../../../node_modules/swiper/modules/effect-fade/effect-fade.scss';
import '../../../../node_modules/swiper/modules/pagination/pagination.scss';
import '../../../../node_modules/swiper/modules/effect-fade/effect-fade.scss';

SwiperCore.use([Autoplay, EffectFade, Pagination]);

const Promoted = () => {
  const products = useSelector(state => getAll(state));
  const promotedDeals = useSelector(state => getPromotedDeals(state));
  const hotDeals = useSelector(state => state.hotDeals);

  const dispatch = useDispatch();
  const productId = products[1].id;
  const handleCLick = e => {
    e.preventDefault();
    dispatch(toggleProductFavorite(productId));
  };
  const view = useSelector(state => getView(state));

  const swiperRef = React.useRef(null);

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className={clsx('col-4', view === 'mobile' && styles.hide)}>
            <div className={styles.leftColumn}>
              <Swiper
                ref={swiperRef}
                modules={[Navigation, EffectFade]}
                speed={300}
                slidesPerView={1}
                autoplay={{
                  pauseOnMouseEnter: true,
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                className={styles.leftSwiper}
              >
                <div className={styles.headerLeftColumn}>
                  <h2>Hot deals</h2>
                </div>
                {hotDeals.map(hotDeal => (
                  <SwiperSlide key={hotDeal.id}>
                    <div className={styles.imageLeftColumn}>
                      <img
                        className={styles.imageLeft}
                        src={`${process.env.PUBLIC_URL}/images/products/${hotDeal.name}.jpg`}
                        alt={hotDeal.name}
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
                        <h5>{hotDeal.name}</h5>
                        <Stars
                          stars={hotDeal.stars}
                          userStars={hotDeal.userStars}
                          id={hotDeal.id}
                        />
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
                                hotDeal.isFavorite && styles.favorite
                              )}
                              onClick={handleCLick}
                            >
                              <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
                            </Button>
                            <Button
                              className={hotDeal.compare ? styles.compare : ''}
                              variant='outline'
                            >
                              <FontAwesomeIcon icon={faExchangeAlt}>
                                Add to compare
                              </FontAwesomeIcon>
                            </Button>
                          </div>
                          <PriceButton
                            price={hotDeal.price}
                            oldPrice={hotDeal.oldPrice}
                          />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <div className='col-8 col-sm'>
            <div className={styles.rightColumn}>
              <Swiper
                ref={swiperRef}
                modules={[Navigation, EffectFade]}
                effect={'fade'}
                speed={300}
                slidesPerView={1}
                loop
                className={styles.rightSwiper}
              >
                {promotedDeals.map(promotedDeal => (
                  <SwiperSlide key={promotedDeal.id}>
                    <img
                      className={styles.imageRight}
                      src={`${process.env.PUBLIC_URL}/images/promotedDeals/${promotedDeal.img}.jpg`}
                      alt={promotedDeal.title}
                    />
                    <div className={styles.hero}>
                      <h1>
                        {promotedDeal.title1}
                        <span> {promotedDeal.title2}</span>
                      </h1>
                      <h2>{promotedDeal.description}</h2>
                      <button className={styles.heroButton}>Shop now</button>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className={styles.imageArrows}>
                <button
                  className={styles.arrowLeft}
                  id='previousButton'
                  onClick={() => swiperRef.current.swiper.slidePrev()}
                >
                  &#60;
                </button>
                <button
                  className={styles.arrowRight}
                  id='nextButton'
                  onClick={() => swiperRef.current.swiper.slideNext()}
                >
                  &#62;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promoted;
