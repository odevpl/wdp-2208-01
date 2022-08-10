import React from 'react';
import styles from './Feedback.module.scss';

import { useSelector } from 'react-redux';
import { useState } from 'react';
import { getAllFeedback } from './../../../redux/feedbackRedux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const Feedback = () => {
  const feedbacks = useSelector(getAllFeedback);

  const [activePage, setActivePage] = useState(0);

  const handlePageChange = newPage => setActivePage(newPage);

  const pagesCount = feedbacks.length;

  const dots = [];
  for (let i = 0; i < pagesCount; i++) {
    dots.push(
      <li key={i}>
        <a
          onClick={() => handlePageChange(i)}
          className={i === activePage ? styles.active : undefined}
        >
          page {i}
        </a>
      </li>
    );
  }

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.panel}>
          <div className='row no-gutters align-items-end'>
            <div className={'col-auto ' + styles.heading}>
              <h3>Client feedback</h3>
            </div>
            <div className={'col-auto ' + styles.dots}>
              <ul>{dots}</ul>
            </div>
          </div>
        </div>
        <div className='row justify-content-center'>
          {feedbacks.slice(activePage, activePage + 1).map(item => (
            <div key={item.id} className='col-10 text-center'>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faQuoteRight} />
                <p className={'col-auto mt-4 ' + styles.description}>
                  {item.description}
                </p>
                <div
                  className={
                    'col-auto mt-4 d-flex flex-row justify-content-center align-items-center ' +
                    styles.client
                  }
                >
                  <img src={item.image} alt={item.name} />
                  <div className={styles.photoDescription}>
                    <p className='col-auto m-0'>{item.name}</p>
                    <p className='col-auto m-0'>Furniture client</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
