/* eslint-disable linebreak-style */
import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDb {
  static async restaurantList() {
    const response = await fetch(API_ENDPOINT.LIST_RESTAURANT);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  //   static async upcomingMovies() {
  //     const response = await fetch(API_ENDPOINT.UPCOMING);
  //     const responseJson = await response.json();
  //     return responseJson.results;
  //   }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default RestaurantDb;
