<template>
  <v-row class="flex-wrap">
    <v-col cols="auto" md="4" sm="12" v-for="beer in beers" :key="beer.id">
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
  async created() {
    try {
      await this.$store.dispatch('getBeers');
    } catch (error) {
      console.log(error);
    }
  },
  computed: {
    ...mapState(['beers']),
  },
};
</script>

<style></style>
