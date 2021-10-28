<template>
  <v-main>
    <v-row class="flex-wrap">
      <v-col cols="auto" md="4" sm="12" v-for="beer in beers" :key="beer.id">
        <BeerCard :beer="beer">
          {{ beer }}
        </BeerCard>
      </v-col>
    </v-row>
    <v-pagination v-model="page" :length="5" circle></v-pagination>
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
      page: parseInt(this.$route.query.page),
    };
  },
  watch: {
    page(value) {
      this.$router.push({ path: `?&page=${value}` });
    },
  },
  async created() {
    this.$store.dispatch('loadFavorites');

    try {
      await this.$store.dispatch('getBeers', {
        page: this.page,
      });
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
