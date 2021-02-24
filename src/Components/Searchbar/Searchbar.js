import styles from './Searchbar.module.css';

// Описание компонента Searchbar
// Компонент принимает один проп onSubmit - функцию для передачи значения инпута при сабмите формы. Создает DOM-элемент следующей структуры.

import React, { Component } from 'react';
import PropTypes from 'prop-types';

// const { query } = this.state;
// const { onSubmit } = this.props;

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    this.setState({ query: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;
    return (
      <header className={styles.Searchbar}>
        <form onSubmit={this.handleSubmit} className={styles.SearchForm}>
          <button type="submit" className={styles.SearchForm_Button}>
            <span className={styles.SearchForm_Button_Label}>Search</span>
          </button>

          <input
            onChange={this.handleChange}
            value={query}
            className={styles.SearchForm_Input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {};

export default Searchbar;
