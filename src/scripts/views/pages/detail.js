/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import UrlParser from '../../routes/url-parser';
import RestaurantDb from '../../data/restaurantdb';
import {
  createRestaurantDetailTemplate,
  createRestaurantFoodMenu,
  createRestaurantDrinkMenu,
  createReviewCustomer,
} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div class="restaurant-detail">
        <div id="restaurant" class="restaurant"></div>

        <div id="menu" class="menu">
          <div class="menu-makanan-container">
            <h3 tabindex="0">menu makanan</h3>
            <ul id="menuMakanan" class="menu-makanan"></ul>
          </div>
          <div class="menu-minuman-container">
            <h3 tabindex="0">menu minuman</h3>
            <ul id="menuMinuman" class="menu-minuman"></ul>
          </div>
        </div>

        <div id="reviewCustomer" class="review-customer">
          <h3 tabindex="0">Apa kata mereka soal resto ini</h3>
        </div>

        <div id="likeButtonContainer"></div>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantDetail = await RestaurantDb.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurantDetail);

    const menuMakanan = document.querySelector('#menuMakanan');
    restaurantDetail.restaurant.menus.foods.forEach((foodMenu) => {
      menuMakanan.innerHTML += createRestaurantFoodMenu(foodMenu);
    });

    const menuMinuman = document.querySelector('#menuMinuman');
    restaurantDetail.restaurant.menus.drinks.forEach((drinkMenu) => {
      menuMinuman.innerHTML += createRestaurantDrinkMenu(drinkMenu);
    });

    const reviewCustomerContainer = document.querySelector('#reviewCustomer');
    restaurantDetail.restaurant.customerReviews.forEach((customerReview) => {
      reviewCustomerContainer.innerHTML += createReviewCustomer(customerReview);
    });

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurantDetail.restaurant.id,
        name: restaurantDetail.restaurant.name,
        description: restaurantDetail.restaurant.description,
        rating: restaurantDetail.restaurant.rating,
        pictureId: restaurantDetail.restaurant.pictureId,
      },
    });
    // console.log(restaurantDetail.restaurant);
  },
};

export default Detail;
