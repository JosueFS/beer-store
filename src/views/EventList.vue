<template>
  <div>
    <h1>Event List</h1>

    <EventCard v-for="event in events" :key="event.id" :event="event">
      {{ event }}
    </EventCard>
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue";
import api from "@/services/api.js";

export default {
  components: {
    EventCard,
  },
  data() {
    return {
      events: [],
    };
  },
  async created() {
    try {
      const response = await api.get("events");
      this.events = response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style></style>
