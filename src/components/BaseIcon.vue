<template>
  <div class="icon-wrapper">
    <v-icon class="icon" :name="name" scale="1" />
    <slot></slot>
  </div>
</template>

<script>
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { HiSolidUsers } from "oh-vue-icons/icons";

addIcons(HiSolidUsers);

export default {
  props: {
    //See additional props: https://oh-vue-icons.netlify.app/docs/#props
    name: String,
  },
  components: {
    "v-icon": OhVueIcon,
  },
};
</script>

<style>
.icon-wrapper {
  display: inline-flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.4);
  font-size: 1rem;
  font-weight: 600;
}
.icon {
  margin-right: 6px;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
}
</style>
