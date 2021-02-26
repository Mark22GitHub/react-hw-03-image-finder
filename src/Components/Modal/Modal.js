import styles from './Modal.module.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleOverlayClose = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImg } = this.props;
    return createPortal(
      <div onClick={this.handleOverlayClose} className={styles.Overlay}>
        <div className={styles.Modal}>
          <img src={largeImg} alt="" />
        </div>
      </div>,
      modalRoot,
    );
  }
}

Modal.propTypes = {};

export default Modal;
