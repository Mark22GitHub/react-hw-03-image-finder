import axios from 'axios';

const key = '18623551-685e1819373a3e2d77873e072';
axios.defaults.baseURL = 'https://pixabay.com/api/';

const fetchImgs = (sQuery = '', page = 1) => {
  return axios
    .get(
      `?q=${sQuery}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(({ data }) => console.log(data.hits));
  //   const url = `https://pixabay.com/api/?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`;
  //   return axios.get(url).then(({ data }) => console.log(data.hits));
};

export default fetchImgs;

// ====================================================
// import axios from 'axios';

// // axios.defaults.baseURL = 'https://pixabay.com/api/';
// const key = '18623551-685e1819373a3e2d77873e072';

// const fetchImgs = (query, page) => {
//   const url = `https://pixabay.com/api/?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`;
//   return axios.get(url).then(({ data }) => console.log(data.hits));
// };

// export default fetchImgs;
// ===============================================================================================================
// import axios from 'axios';

// // В ответе от апи приходит массив объектов, в которых тебе интересны только следущие свойства.

// // id - уникальный идентификатор
// // webformatURL - ссылка на маленькое изображение для списка карточек
// // largeImageURL - ссылка на большое изображение для модального окна

// const key = '18623551-685e1819373a3e2d77873e072';

// const fetchImgs = (query, page) => {
//   const url = `https://pixabay.com/api/?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`;
//   return axios.get(url).then(({ data }) => console.log(data.hits));

//   //   .then(hits => this.setState({ hits }))
//   //   .catch(error => console.log(error));
// };

// export default fetchImgs;
