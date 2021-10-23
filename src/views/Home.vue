<template>
  <v-row class="flex-wrap">
    <v-col cols="4" no-gutters v-for="beer in beers" :key="beer.id">
      <BeerCard :beer="beer">
        {{ beer }}
      </BeerCard>
    </v-col>
  </v-row>
</template>

<script>
// import NavBar from
import BeerCard from "@/components/BeerCard.vue";
import api from "@/services/api.js";

export default {
  components: {
    BeerCard,
  },
  data() {
    return {
      beers: [],
    };
  },
  methods: {
    menuItems() {
      return this.menu;
    },
  },
  async created() {
    try {
      const response = await api.get("beers");
      this.beers = response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style></style>
