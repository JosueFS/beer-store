<template>
  <v-row class="flex-wrap">
    <v-col cols="3." v-for="beer in beers" :key="beer.id">
      <BeerCard :beer="beer" @update-favorites="updateFavorite">
        {{ beer }}
      </BeerCard>
    </v-col>
  </v-row>
</template>

<script>
import BeerCard from "@/components/BeerCard.vue";
import api from "@/services/api.js";

export default {
  components: {
    BeerCard,
  },
  data() {
    return {
      beers: [],
      favorites: [],
    };
  },
  methods: {
    updateFavorite(beer, action) {
      switch (action) {
        case "add":
          this.favorites.push(beer);
          localStorage.setItem(
            "@BeerList:Favorites",
            JSON.stringify(this.favorites)
          );
          break;
        case "remove":
          this.favorites = this.favorites.filter(
            (favorite_beer) => favorite_beer.id !== beer.id
          );
          localStorage.setItem(
            "@BeerList:Favorites",
            JSON.stringify(this.favorites)
          );
          break;
        default:
          break;
      }
    },
  },
  async created() {
    try {
      const response = await api.get("beers");
      this.beers = response.data;

      this.favorites =
        JSON.parse(localStorage.getItem("@BeerList:Favorites")) || [];
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style></style>
