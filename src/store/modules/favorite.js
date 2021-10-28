export const namespaced = true;

export default {
  namespaced: true,

  //Valores que serão utilizados globalmente
  state: {
    favorites: [],
  },

  //Funções que farão atualização nos valores dos states
  mutations: {
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
    addFavorite({ commit }, beer) {
      commit('ADD_FAVORITE', beer);
    },
    removeFavorite({ commit }, beer) {
      commit('REMOVE_FAVORITE', beer);
    },
    loadFavorites({ commit }) {
      commit('LOAD_SAVED_FAVORITES');
    },
    saveInLocalStorage({ state }) {
      localStorage.setItem(
        '@BeerList:Favorites',
        JSON.stringify(state.favorites)
      );
    },
    isFavoriteBeer({ state }, id) {
      const foundBeer = state.favorites.find((fav_beer) => id === fav_beer.id);
      console.log(!!foundBeer, id);
      console.log(state);

      return !!foundBeer;
    },
  },
};
