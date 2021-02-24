import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import Searchbar from './Components/Searchbar/Searchbar';
// import fetchImgs from './api/pixabay-api';
import styles from './App.module.css';
import ImageGallery from './Components/ImageGallery/ImageGallery';

// axios.defaults.headers.common['Authorization'] =
//   'Bearer 18623551-685e1819373a3e2d77873e072';

const key = '18623551-685e1819373a3e2d77873e072';
axios.defaults.baseURL = 'https://pixabay.com/api/';

class App extends Component {
  state = {
    imgs: [],
    query: '',
    page: 1,
  };

  // ==========================
  onChangeQuery = (query, page) => {
    // const key = '18623551-685e1819373a3e2d77873e072';
    axios
      .get(
        `?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
      )
      .then(({ data }) => {
        this.setState({ imgs: data.hits });
        console.log(this.state.imgs);
      })
      .catch(error => console.log(error));
  };

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

  componentDidUpdate() {}

  render() {
    const { imgs } = this.state;
    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery imgs={imgs} />

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
