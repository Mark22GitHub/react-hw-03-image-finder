import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import axios from 'axios';
import fetchImgs from './api/pixabay-api';

class App extends Component {
  state = {
    imgs: [],
    query: '',
    page: 1,
  };
  // =========================
  componentDidMount() {
    fetchImgs()
      .then(data => {
        this.setState({ imgs: data.hits });
        console.log(this.state.imgs);
      })
      .catch(error => console.log(error));
  }
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
    return <div></div>;
  }
}

// App.propTypes = {};

export default App;
