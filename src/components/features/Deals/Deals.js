import React from 'react';
import { useSelector } from 'react-redux';
import { getDealById } from '../../../redux/productsRedux';
import styles from './Deals.module.scss';
import clsx from 'clsx';

const Deals = () => {
  const dealOne = useSelector(state => getDealById(state, 1));
  const dealTwo = useSelector(state => getDealById(state, 2));
  const dealThree = useSelector(state => getDealById(state, 3));

  return (
    <div className={clsx('container', styles.main)}>
      <div className='row'>
        <div className='col-6'>
          <div className={styles.dealOne}>
            <div className={styles.image}>
              <img
                className={styles.img}
                src={`${process.env.PUBLIC_URL}/images/deals/${dealOne.nameImg}.jpg`}
                alt={dealOne.name}
              />
            </div>
            <div className={styles.description}>
              <h2 className={styles.title}>{dealOne.title}</h2>
              <h3 className={styles.titleTwo}>{dealOne.title2}</h3>
              <p>{dealOne.subtitle}</p>
            </div>
          </div>
        </div>

        <div className='col-6'>
          <div className={styles.dealTwo}>
            <div className={styles.small}>
              <img
                className={styles.img}
                src={`${process.env.PUBLIC_URL}/images/deals/${dealTwo.nameImg}.png`}
                alt={dealTwo.name}
              />
            </div>
            <div className={styles.description}>
              <h2 className={styles.title}>{dealTwo.title}</h2>
              <h2 className={styles.titleTwo}>{dealTwo.title2}</h2>
              <h3 className={styles.titleThree}>{dealTwo.title3}</h3>
              <p>{dealTwo.subtitle}</p>
            </div>
          </div>

          <div className={styles.dealThree}>
            <div className={styles.small}>
              <img
                className={styles.img}
                src={`${process.env.PUBLIC_URL}/images/deals/${dealThree.nameImg}.png`}
                alt={dealThree.name}
              />
            </div>
            <div className={styles.description}>
              <h2 className={styles.title}>{dealThree.title}</h2>
              <h2 className={styles.titleTwo}>{dealThree.title2}</h2>
              <h3 className={styles.titleThree}>{dealThree.title3}</h3>
              <p>{dealThree.subtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Deals;
