import styles from './ImageGallery.module.css';

import React from 'react';
// import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ imgs }) => {
  //   console.log(1111, imgs);
  return (
    <ul className={styles.ImageGallery}>
      {imgs.map(({ id, webformatURL }) => (
        <ImageGalleryItem key={id} webformatURL={webformatURL} />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {};

export default ImageGallery;

// Описание компонента ImageGallery
// Список карточек изображений. Создает DOM-элемент следующей структуры.
// ==============================================
// {
//   <ul className={styles.ImageGallery}>
//     {imgs.map(({ id, webformatURL }) => (
//       <ImageGalleryItem />
//     ))}
//   </ul>;
// }
