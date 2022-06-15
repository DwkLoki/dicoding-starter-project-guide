/* eslint-disable linebreak-style */
import CONFIG from './config';

const API_ENDPOINT = {
  LIST_RESTAURANT: `${CONFIG.BASE_URL}list`,
  //   UPCOMING: `${CONFIG.BASE_URL}movie`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
};

export default API_ENDPOINT;
