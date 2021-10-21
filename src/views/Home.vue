<template>
  <div>
    <h1>Beer List</h1>

    <BeerCard v-for="event in events" :key="event.id" :event="event">
      {{ event }}
    </BeerCard>
  </div>
</template>

<script>
import BeerCard from "@/components/BeerCard.vue";
// import api from "@/services/api.js";

export default {
  components: {
    BeerCard,
  },
  data() {
    return {
      events: [],
    };
  },
  // async created() {
  //   try {
  //     const response = await api.get("events");
  //     this.events = response.data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },
};
</script>

<style></style>
