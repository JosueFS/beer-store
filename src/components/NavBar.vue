<template>
  <div>
    <v-app-bar dark app>
      <router-link to="/" @click="clearQuery" class="brand">
        <v-toolbar-title> Beer Store </v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>

      <v-text-field
        label="Search"
        v-model.trim="query"
        class="mt-6"
        filled
        dense
        v-show="$route.path === '/'"
      ></v-text-field>

      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          exact
          v-for="item in menu"
          :key="item.title"
          @click="clearQuery"
          :to="{ name: item.name }"
        >
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>

      <v-app-bar-nav-icon
        @click="drawer = true"
        class="hidden-sm-and-up"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item
            exact
            v-for="item in menu"
            :key="item.title"
            :to="{ name: item.name }"
          >
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        { title: 'Home', name: 'home' },
        { title: 'Favorites', name: 'favorites' },
      ],
      drawer: false,
      query: '',
      timer: null,
    };
  },
  watch: {
    //Prevent multiple request to API when typing a query string
    query(value) {
      clearInterval(this.timer);
      this.$store.dispatch('handleSetQueryString', value);

      this.timer = setTimeout(async () => {
        this.$router
          .push({
            query: { ...this.$route.query, queryString: value, page: 1 },
          })
          .catch(() => {});
        clearInterval(this.timer);
      }, 1000);
    },
  },
  methods: {
    clearQuery() {
      this.query = '';
      this.$router.push({ query: {} }).catch(() => {});
    },
  },
};
</script>

<style lang="scss">
a.brand > div.v-toolbar__title {
  color: #fff;
}

aside.v-navigation-drawer {
  height: auto !important;
}

div.v-input {
  border-radius: 28px;

  div.v-input__slot {
    &:before,
    &:after {
      border: transparent !important;
    }

    div.v-text-field__slot {
      padding: 0 16px;

      & > label {
        left: 8px;
      }
    }
  }
}
</style>
