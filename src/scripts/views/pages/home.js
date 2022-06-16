/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import RestaurantDb from '../../data/restaurantdb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Now Playing in Cinema</h2>
        <div id="restaurants" class="restaurants">
 
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantDb.restaurantList();
    // console.log(restaurants);
    const restaurantContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });

    // console.log(restaurants);
  },
};

export default Home;
