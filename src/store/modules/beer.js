import API from '@/services/API.js';

export default {
  namespaced: true,

  state: {
    beers: [],
  },
  mutations: {
    UPDATE_BEER_LIST(state, beerList) {
      state.beers = beerList;
    },
  },
  actions: {
    async getBeers({ commit }, queryString, page, perPage) {
      try {
        const { data: beerList } = await API.getBeerList(
          queryString,
          page,
          perPage
        );

        commit('UPDATE_BEER_LIST', beerList);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
