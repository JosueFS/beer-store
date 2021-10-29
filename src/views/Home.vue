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
      v-model="componentPage"
      circle
      :length="2"
      :disabled="beers.length < 9"
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
      componentPage: parseInt(this.$route.query.page) || 1,
    };
  },
  watch: {
    componentPage(value) {
      this.$router.push({ query: { ...this.$route.query, page: value } });

      this.$store.dispatch('handleSetPage', value);
    },
  },
  async created() {
    await this.$store.dispatch('beerModule/getBeers', {
      ...this.$route.query,
    });
  },
  computed: mapState({
    beers: (state) => state.beerModule.beers,
    page: (state) => state.page,
  }),
};
</script>

<style></style>
