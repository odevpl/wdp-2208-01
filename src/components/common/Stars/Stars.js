import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Stars.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { useDispatch } from 'react-redux';
import { updateProductRate } from '../../../redux/productsRedux';
import Button from '../Button/Button';
const Stars = ({ stars, userStars, id }) => {
  const [hover, setHover] = useState(0);
  const dispatch = useDispatch();
  const handleClick = ({ e, i, id }) => {
    e.preventDefault();
    dispatch(updateProductRate({ id: id, userStars: i }));
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map(i => (
        <Button onClick={e => handleClick({ i, e, id })} key={i}>
          <FontAwesomeIcon
            icon={i <= (hover || userStars || stars) ? faStar : farStar}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(0)}
            className={
              userStars || hover === i || (hover && stars)
                ? styles.userStars
                : styles.stars
            }
          ></FontAwesomeIcon>
        </Button>
      ))}
    </div>
  );
};
Stars.propTypes = {
  stars: PropTypes.number,
  userStars: PropTypes.number,
  id: PropTypes.string,
};

export default Stars;
