import axios from 'axios';

const key = '18623551-685e1819373a3e2d77873e072';
axios.defaults.baseURL = 'https://pixabay.com/api/';

const fetchPictures = ({ query = '', page = 1 }) => {
  return axios
    .get(
      `?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(({ data }) => data.hits);
};

export default fetchPictures;
