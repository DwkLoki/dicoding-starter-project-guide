/* eslint-disable linebreak-style */
import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 tabindex="0" class="restaurant__title">${restaurant.restaurant.name}</h2>
  <img tabindex="0" class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.restaurant.pictureId}" alt="gambar restoran ${restaurant.restaurant.name}" />
  <div class="restaurant__info">
    <h3 tabindex="0">Information</h3>
    <h4 tabindex="0">Alamat</h4>
    <p tabindex="0">${restaurant.restaurant.address}</p>
    <h4 tabindex="0">Kota</h4>
    <p tabindex="0">${restaurant.restaurant.city}</p>
    <h4 tabindex="0">Rating</h4>
    <p tabindex="0">${restaurant.restaurant.rating}</p>
  </div>
  <div class="restaurant__overview">
    <h3 tabindex="0">Deskripsi</h3>
    <p tabindex="0">${restaurant.restaurant.description}</p>
  </div>
`;

const createRestaurantFoodMenu = (foodMenu) => `
  <li tabindex="0">${foodMenu.name}</li>
`;

const createRestaurantDrinkMenu = (drinkMenu) => `
  <li tabindex="0">${drinkMenu.name}</li>
`;

const createReviewCustomer = (review) => `
  <div class="review-customer-container">
    <span tabindex="0">${review.name}: <em>"${review.review}"</em></span>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item" aria-label="Item restoran ${restaurant.name}">
    <div class="restaurant-item__header">
      <img tabindex="0" class="restaurant-item__header__poster" alt="Gambar restoran ${restaurant.name}"
           src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
      <div tabindex="0" class="restaurant-item__header__rating">
        <p>⭐️<span class="restaurant-item__header__rating__score">rating ${restaurant.rating}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
      <p tabindex="0">${restaurant.description}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const heroImage = `
  <div tabindex="0" class="hero-element">
    <img src="./heros/hero-image_2.jpg" alt="gambar utama website">
  </div>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createRestaurantFoodMenu,
  createRestaurantDrinkMenu,
  createReviewCustomer,
  heroImage,
};
