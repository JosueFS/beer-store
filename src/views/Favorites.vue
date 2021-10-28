<template>
  <v-row class="flex-wrap">
    <v-col
      cols="auto"
      lg="3"
      md="4"
      sm="4"
      xs="4"
      v-for="beer in favorites"
      :key="beer.id"
    >
      <BeerCard :beer="beer">
        {{ beer }}
      </BeerCard>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex';
import BeerCard from '@/components/BeerCard.vue';

export default {
  components: {
    BeerCard,
  },

  computed: mapState({
    favorites: (state) => state.favoriteModule.favorites,
  }),
};
</script>
