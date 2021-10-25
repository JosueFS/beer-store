<template>
  <v-row class="flex-wrap">
    <v-col
      cols="4"
      rows="12"
      no-gutters
      v-for="beer in favorites"
      :key="beer.id"
    >
      <BeerCard :beer="beer" @update-favorites="updateFavorite">
        {{ beer }}
      </BeerCard>
    </v-col>
  </v-row>
</template>

<script>
import BeerCard from "@/components/BeerCard.vue";

export default {
  components: {
    BeerCard,
  },
  data() {
    return {
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
  created() {
    try {
      this.favorites =
        JSON.parse(localStorage.getItem("@BeerList:Favorites")) || [];
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
