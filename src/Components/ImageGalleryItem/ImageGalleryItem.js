import styles from './ImageGalleryItem.module.css';

import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ webformatURL, toggleModal, largeImageURL }) => {
  return (
    <li
      onClick={() => toggleModal(largeImageURL)}
      className={styles.ImageGalleryItem}
    >
      <img
        src={webformatURL}
        alt=""
        className={styles.ImageGalleryItem_Image}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {};

export default ImageGalleryItem;
