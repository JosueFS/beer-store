<template>
  <div class="event-card -shadow">
    <img class="beer-image" :src="beer.image_url" :alt="beer.tagline" />
    <div class="title-box">
      <h4 class="title">{{ beer.name }}</h4>
    </div>
    <i class="tagline">{{ beer.tagline }} </i>
    <p class="multiline">{{ beer.description }}</p>

    <FavoriteIcon
      class="favorite-icon"
      @click.native="updFavorites"
      :isFavorite="isFavorite"
    />

    <div class="card-footer">
      <strong>{{ beer.first_brewed.slice(3) }}</strong>
    </div>
  </div>
</template>

<script>
import FavoriteIcon from '@/components/FavoriteIcon.vue';

export default {
  props: {
    beer: Object,
  },
  components: {
    FavoriteIcon,
  },
  data() {
    return {
      isFavorite: false,
    };
  },
  methods: {
    updFavorites() {
      if (this.isFavorite) {
        this.$store.dispatch('favoriteModule/removeFavorite', this.beer);
      } else {
        this.$store.dispatch('favoriteModule/addFavorite', this.beer);
      }
      this.isFavorite = !this.isFavorite;
    },
  },
  computed: {
    // ...mapGetters('favoriteModule', ['isFavoriteBeer']),
    // isFavorite() {
    //   return this.isFavoriteBeer(this.beer.id);
    // },
  },
  async created() {
    this.isFavorite = await this.$store.dispatch(
      'favoriteModule/isFavoriteBeer',
      this.beer.id
    );
  },
};
</script>

<style lang="scss">
.event-card {
  position: relative;
  /* max-width: 278px; */
  min-width: 310px;
  max-height: 440px;
  padding: 20px 20px 0;
  margin-bottom: 24px;
  transition: all 0.4s linear;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.13);

  .favorite-icon {
    position: absolute;
    width: 50px;
    height: 50px;
    top: 8px;
    right: 8px;
    background: transparent;
    border: 0;
    outline: 0;
    border-radius: 50%;

    &:hover {
      background: #fee7f2;
    }
  }

  .beer-image {
    height: 200px;
    width: auto;
  }

  > .title-box {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > .title {
      font-family: 'Roboto Slab' !important;
      margin: 0;
    }
  }

  .tagline {
    text-transform: italic;
  }

  .multiline {
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    white-space: normal;
    /* transition: all 3s; */
  }

  &:hover {
    max-height: 700px;
    /* transform: scale(1.01); */
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2),
      0 1px 15px 0 rgba(0, 0, 0, 0.19);

    .multiline {
      overflow: visible;
      -webkit-line-clamp: unset;
    }
  }

  .card-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
  }
}
.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
  /* z-index: 1; */
}
</style>
