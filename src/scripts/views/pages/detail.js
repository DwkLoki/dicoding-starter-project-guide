/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import UrlParser from '../../routes/url-parser';
import RestaurantDb from '../../data/restaurantdb';
import { createRestaurantDetailTemplate, createLikeButtonTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantDetail = await RestaurantDb.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    // const likeButtonContainer = document.querySelector('#likeButtonContainer');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurantDetail);
    // likeButtonContainer.innerHTML = createLikeButtonTemplate();

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurantDetail.restaurant.id,
        name: restaurantDetail.restaurant.name,
        description: restaurantDetail.restaurant.description,
        rating: restaurantDetail.restaurant.rating,
        pictureId: restaurantDetail.restaurant.pictureId,
        city: restaurantDetail.restaurant.city,
      },
    });
    // console.log(restaurantDetail);
  },
};

export default Detail;
