import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getBlog } from '../../../redux/blogRedux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import styles from './Blog.module.scss';

const Blog = () => {
  const blog = useSelector(getBlog);
  const [activePage, setActivePage] = useState(0);
  const handlePageChange = newPage => setActivePage(newPage);
  const pagesCount = Math.ceil(blog.length / 3);
  const dots = [];
  for (let i = 0; i < pagesCount; i++) {
    dots.push(
      <li key={i}>
        <a
          onClick={() => handlePageChange(i)}
          className={i === activePage && styles.active}
        >
          page {i}
        </a>
      </li>
    );
  }
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.panelBar}>
          <div className='row'>
            <div className={'col-auto ' + styles.heading}>
              <h3> Latest Blog</h3>
            </div>
            <div className={'col-auto ' + styles.dots}>
              <ul>{dots}</ul>
            </div>
          </div>
        </div>
        <div className='row'>
          {blog.slice(activePage * 3, (activePage + 1) * 3).map(item => (
            <div key={item.id} className='col col-12 col-md-4 col-lg-3'>
              <div className={styles.box}>
                <div className={styles.image}>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/blog/${item.name}.jpg`}
                    alt={item.name}
                  />
                  <div className={styles.info}>
                    <div className={styles.date}>
                      <FontAwesomeIcon
                        className={styles.icon}
                        icon={faCalendar}
                      ></FontAwesomeIcon>
                      <span>{item.date}</span>
                    </div>
                    <div className={styles.comment}>
                      <FontAwesomeIcon
                        className={styles.icon}
                        icon={faComments}
                      ></FontAwesomeIcon>
                      <span>{`${item.comments} Comments`}</span>
                    </div>
                  </div>
                </div>
                <div className={styles.description}>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
                <button>Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
