<template>
  <router-link
    class="event-link"
    :to="{ name: 'event-show', params: { id: beer.id } }"
  >
    <div class="event-card -shadow">
      <span class="eyebrow">@{{ beer.tagline }} </span>
      <h4 class="title">{{ beer.name }}</h4>
      <span>{{ beer.first_brewed }}</span>
      <BaseIcon name="fa-star"> </BaseIcon>
      <span>{{ beer.description }}</span>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    beer: Object,
  },
};
</script>

<style lang="scss">
.event-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card > .title {
  margin: 0;
}

.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>
