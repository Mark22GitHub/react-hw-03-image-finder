import React, { Component } from 'react';

import Searchbar from './Components/Searchbar';
import fetchPictures from './api/pixabay-api';
import styles from './App.module.css';
import ImageGallery from './Components/ImageGallery';
import Button from './Components/Button';
import Loader from './Components/Loader';
import Modal from './Components/Modal';

class App extends Component {
  state = {
    imgs: [],
    query: '',
    page: 1,
    isLoading: false,
    error: null,
    openModal: false,
    largeImageURL: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.fetchImgs();
    }
  }

  onChangeQuery = request => {
    this.setState({ query: request, page: 1, imgs: [], error: null });
  };

  fetchImgs = () => {
    const { query, page } = this.state;
    const options = { query, page };

    this.setState({ isLoading: true });

    fetchPictures(options)
      .then(imgs => {
        this.setState(prevState => ({
          imgs: [...prevState.imgs, ...imgs],
          page: prevState.page + 1,
        }));
        page > 1 &&
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };
  // fetchImgs(options).then(imgs => {
  //       this.setState(({ imgs, page }) => ({
  //         imgs: [...imgs, ...imgs],
  //         page: page + 1,
  //       }));
  //     });

  toggleModal = largeImg => {
    this.setState(({ openModal }) => ({
      openModal: !openModal,
      largeImageURL: largeImg,
    }));
  };

  render() {
    const { imgs, isLoading, error, openModal, largeImageURL } = this.state;
    const ifRenderLoadMore = imgs.length > 0 && !isLoading;

    return (
      <div className={styles.App}>
        {openModal && (
          <Modal onClose={this.toggleModal} largeImg={largeImageURL} />
        )}
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery imgs={imgs} toggleModal={this.toggleModal} />
        {ifRenderLoadMore && <Button fetchImgs={this.fetchImgs} />}
        {isLoading && <Loader />}
        {error && <h1>Something went wrong...Try again!</h1>}
      </div>
    );
  }
}

export default App;
