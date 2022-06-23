/* eslint-disable no-unused-vars */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#query');
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');
  I.waitForElement('.restaurant__title a');

  const firstRestaurant = locate('.restaurant__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant__title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');
  I.waitForElement('.restaurant__title a');

  const firstRestaurant = locate('.restaurant__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant__title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  I.waitForElement('.restaurant__title a');
  const unlikeRestaurant = locate('.restaurant__title a').first();
  const unlikeRestaurantTitle = await I.grabTextFrom(unlikeRestaurant);
  I.click(unlikeRestaurant);

  I.waitForElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});

// Scenario('searching restaurants', async ({ I }) => {
//   I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');

//   I.amOnPage('/');

//   I.waitForElement('.restaurant__title a');

//   const titles = [];

//   for (let i = 1; i <= 3; i++) {
//     I.click(locate('.restaurant__title a').at(i));
//     I.waitForElement('#likeButton');
//     I.click('#likeButton');
//     titles.push(await I.grabTextFrom('.restaurant__title'));
//     I.amOnPage('/');
//   }

//   I.amOnPage('/#/favorite');
//   I.seeElement('#query');

//   const searchQuery = titles[1].substring(1, 3);
//   const matchingRestaurants = titles.filter((title) => title.indexOf(searchQuery) !== -1);

//   I.fillField('#query', searchQuery);
//   I.pressKey('Enter');

//   const visibleLikedRestaurants = await I.grabNumberOfVisibleElements('.restaurant-item');
//   assert.strictEqual(matchingRestaurants.length, visibleLikedRestaurants);

//   matchingRestaurants.forEach(async (title, index) => {
//     const visibleTitle = await I.grabTextFrom(locate('.restaurant__title').at(index + 1));
//     assert.strictEqual(title, visibleTitle);
//   });
// });
