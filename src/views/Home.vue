<template>
  <div>
    <h1>Beer List</h1>

    <BeerCard v-for="beer in beers" :key="beer.id" :beer="beer">
      {{ beer }}
    </BeerCard>
  </div>
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
    };
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
