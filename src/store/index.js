import Vue from 'vue';
import Vuex from 'vuex';

import beerModule from '@/store/modules/beer.js';
import favoriteModule from '@/store/modules/favorite.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    beerModule,
    favoriteModule,
  },
});
