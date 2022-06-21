/* eslint-disable linebreak-style */
import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__title">${restaurant.restaurant.name}</h2>
  <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.restaurant.pictureId}" alt="gambar restoran ${restaurant.restaurant.name}" />
  <div class="restaurant__info">
    <h3>Information</h3>
    <h4>Alamat</h4>
    <p>${restaurant.restaurant.address}</p>
    <h4>Kota</h4>
    <p>${restaurant.restaurant.city}</p>
    <h4>Rating</h4>
    <p>${restaurant.restaurant.rating}</p>
  </div>
  <div class="restaurant__overview">
    <h3>Deskripsi</h3>
    <p>${restaurant.restaurant.description}</p>
  </div>
`;

const createRestaurantFoodMenu = (foodMenu) => `
  <li>${foodMenu.name}</li>
`;

const createRestaurantDrinkMenu = (drinkMenu) => `
  <li>${drinkMenu.name}</li>
`;

const createReviewCustomer = (review) => `
  <div class="review-customer-container">
    <span>${review.name}: <em>"${review.review}"</em></span>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item" aria-label="Item restoran ${restaurant.name}">
    <div class="restaurant-item__header">
      <img class="restaurant-item__header__poster" alt="${restaurant.name || '-'}"
           src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
      <div class="restaurant-item__header__rating">
        <p>⭐️<span class="restaurant-item__header__rating__score">rating ${restaurant.rating || '-'}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3 class="restaurant__title"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name || '-'}</a></h3>
      <p>${restaurant.description || '-'}</p>
    </div>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const heroImage = `
  <div class="hero-element">
    <img src="./heros/hero-image_2.jpg" alt="gambar utama website">
  </div>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
  createRestaurantFoodMenu,
  createRestaurantDrinkMenu,
  createReviewCustomer,
  heroImage,
};
