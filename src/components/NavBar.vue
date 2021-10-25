<template>
  <div>
    <v-app-bar dark app>
      <router-link to="/" class="brand">
        <v-toolbar-title> Beer Store </v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>

      <v-text-field label="Search" class="mt-6" filled dense></v-text-field>

      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          exact
          v-for="item in menu"
          :key="item.title"
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
          <v-list-item v-for="item in menu" :key="item.title">
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
        { title: "Home", name: "home" },
        { title: "Favorites", name: "favorites" },
      ],
      drawer: false,
    };
  },
};
</script>

<style lang="scss">
a.brand > div.v-toolbar__title {
  color: #fff;
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
