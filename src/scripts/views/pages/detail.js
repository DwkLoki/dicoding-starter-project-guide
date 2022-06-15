/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import UrlParser from '../../routes/url-parser';
import RestaurantDb from '../../data/restaurantdb';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDb.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
    console.log(restaurant);
  },
};

export default Detail;
