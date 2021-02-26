import styles from './ImageGallery.module.css';

import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ imgs, toggleModal }) => {
  return (
    <ul className={styles.ImageGallery}>
      {imgs.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          toggleModal={toggleModal}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  imgs: PropTypes.array.isRequired,
  toggleModal: PropTypes.func.isRequired,
  id: PropTypes.number,
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
};

export default ImageGallery;
