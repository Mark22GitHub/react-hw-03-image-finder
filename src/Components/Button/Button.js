import styles from './Button.module.css';

import React from 'react';
// import PropTypes from 'prop-types';

const Button = ({ fetchImgs }) => {
  return (
    <button className={styles.Button} type="button" onClick={fetchImgs}>
      Load more
    </button>
  );
};

Button.propTypes = {};

export default Button;

// Описание компонента Button
// При нажатии на кнопку Load more должна догружаться следующая порция изображений и рендериться вместе с предыдущими. После загрузки и рендера новой партии изображений страница должна плавно скролиться. Для скрола используй следующий код.

window.scrollTo({
  top: document.documentElement.scrollHeight,
  behavior: 'smooth',
});
// Кнопка должна рендерится только тогда, когда есть какие-то загруженные изобаржения. Если массив изображений пуст, кнопка не рендерится.
