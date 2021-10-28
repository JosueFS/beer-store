import Vue from 'vue';
import Vuex from 'vuex';
import API from '@/services/API.js';

Vue.use(Vuex);

export default new Vuex.Store({
  //Valores que serão utilizados globalmente
  state: {
    beers: [],
    favorites: [],
  },

  //Funções que farão atualização nos valores dos states
  mutations: {
    UPDATE_BEER_LIST(state, beerList) {
      state.beers = beerList;
    },
    LOAD_SAVED_FAVORITES(state) {
      const savedFavorites =
        JSON.parse(localStorage.getItem('@BeerList:Favorites')) || [];

      if (savedFavorites.length) {
        state.favorites = savedFavorites;
      }
    },
    ADD_FAVORITE(state, beer) {
      state.favorites.push(beer);
    },
    REMOVE_FAVORITE(state, beer) {
      state.favorites = state.favorites.filter(
        (favorite_beer) => favorite_beer.id !== beer.id
      );
    },
  },

  //Funções que serão utilizadas globalmente (para chamar uma mutation ou não)
  actions: {
    async getBeers({ commit }, queryString, page, perPage) {
      const { data: beerList } = await API.getBeerList(
        queryString,
        page,
        perPage
      );

      commit('UPDATE_BEER_LIST', beerList);
    },
    addFavorite({ commit }, beer) {
      commit('ADD_FAVORITE', beer);
    },
    removeFavorite({ commit }, beer) {
      commit('REMOVE_FAVORITE', beer);
    },
    loadFavorites({ commit }) {
      commit('LOAD_SAVED_FAVORITES');
    },
  },
  saveInLocalStorage({ state }) {
    localStorage.setItem(
      '@BeerList:Favorites',
      JSON.stringify(state.favorites)
    );
  },

  //Valores calculados utilizando os states
  getters: {
    isFavoriteBeer: (state) => (id) => {
      const foundBeer = state.favorites.find((fav_beer) => id === fav_beer.id);

      return !!foundBeer;
    },
  },
});
