<template>
  <v-main>
    <v-row class="flex-wrap">
      <v-col cols="auto" md="4" sm="12" v-for="beer in beers" :key="beer.id">
        <BeerCard :beer="beer">
          {{ beer }}
        </BeerCard>
      </v-col>
    </v-row>
    <v-pagination
      class="my-4"
      v-model="page"
      :length="36"
      :total-visible="10"
      circle
    ></v-pagination>
  </v-main>
</template>

<script>
import { mapState } from 'vuex';

import BeerCard from '@/components/BeerCard.vue';

export default {
  components: {
    BeerCard,
  },
  data() {
    return {
      page: parseInt(this.$route.query.page) || 1,
    };
  },
  watch: {
    page(value) {
      this.$router.push({ path: `?page=${value}` });
    },
  },
  async created() {
    await this.$store.dispatch('beerModule/getBeers', {
      page: this.page,
    });
  },
  computed: mapState({
    beers: (state) => state.beerModule.beers,
  }),
};
</script>

<style></style>
