import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import Searchbar from './Components/Searchbar/Searchbar';
import fetchImgs from './api/pixabay-api';
import styles from './App.module.css';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import Button from './Components/Button/Button';

// axios.defaults.headers.common['Authorization'] =
//   'Bearer 18623551-685e1819373a3e2d77873e072';

class App extends Component {
  state = {
    imgs: [],
    sQuery: '',
    page: 1,
    isLoading: false,
    error: null,
  };

  // ==========================

  componentDidUpdate(prevProps, prevState) {
    if (prevState.sQuery !== this.state.sQuery) {
      this.fetchImgs();
    }
  }

  onChangeQuery = query => {
    this.setState({ sQuery: query, page: 1, imgs: [], error: null });
  };

  fetchImgs = () => {
    const { sQuery, page } = this.state;
    const options = { sQuery, page };
    console.log(this.state.imgs);

    this.setState({ isLoading: true });

    fetchImgs(options).then(imgs => {
      this.setState(prevState => ({
        imgs: [...prevState.imgs, ...imgs],
        page: prevState.page + 1,
      }));
      console.log(this.state.imgs);
    });
    // .catch(error => this.setState({ error }))
    // .finnaly(() => this.setState({ isLoading: false }));
  };
  // fetchImgs(options).then(imgs => {
  //       this.setState(({ imgs, page }) => ({
  //         imgs: [...imgs, ...imgs],
  //         page: page + 1,
  //       }));
  //       console.log(this.state.imgs);
  //     });
  // =========================
  // componentDidMount() {
  //   fetchImgs()
  //     .then(data => {
  //       this.setState({ imgs: data.hits });
  //       console.log(this.state.imgs);
  //     })
  //     .catch(error => console.log(error));
  // =============================
  // componentDidMount() {
  //   const key = '18623551-685e1819373a3e2d77873e072';
  //   const { query, page } = this.state;
  //   axios
  //     .get(
  //       `https://pixabay.com/api/?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
  //     )
  //     .then(({ data }) => {
  //       this.setState({ imgs: data.hits });
  //       console.log(this.state.imgs);
  //     })
  //     .catch(error => console.log(error));
  // }

  render() {
    const { imgs, isLoading, error } = this.state;
    const ifRenderLoadMore = imgs.length > 0 && !isLoading;

    return (
      <div className={styles.App}>
        {error && <h1>Something went wrong...</h1>}
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery imgs={imgs} />

        {isLoading && <h1>Loading...</h1>}

        {ifRenderLoadMore && <Button fetchImgs={this.fetchImgs} />}

        {/* <ul className={styles.ImageGallery}>
          {imgs.map(({ id, webformatURL }) => (
            <li key={id} className={styles.ImageGalleryItem}>
              <img
                src={webformatURL}
                alt=""
                className={styles.ImageGalleryItem_Image}
              />
            </li>
          ))}
        </ul> */}
      </div>
    );
  }
}

// App.propTypes = {};

export default App;
