import styles from './Button.module.css';

import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ fetchImgs }) => {
  return (
    <button className={styles.Button} type="button" onClick={fetchImgs}>
      Load more
    </button>
  );
};

Button.propTypes = {
  fetchImgs: PropTypes.func,
};

export default Button;
