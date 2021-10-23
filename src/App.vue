<template>
  <v-app app>
    <NavBar />
    <v-main style="margin-top: 16px">
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  margin: 0;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  line-height: 1.5;
}
#app {
  padding: 0 20px 20px;
  justify-content: center;
}

div {
  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all */
  -ms-user-select: none; /* IE 10+ */
  user-select: none;
}

hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}
a {
  color: inherit;
  text-decoration: none;
}
img {
  border-style: none;
  width: 100%;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  display: flex;
  align-items: center;
  font-family: "Montserrat", sans-serif;
}
h1 {
  font-size: 50px;
  font-weight: 700;
}
h2 {
  font-size: 38px;
  font-weight: 700;
}
h3 {
  font-size: 28px;
  font-weight: 700;
}
h4 {
  font-size: 21px;
  font-weight: 700;
}
h5 {
  font-size: 16px;
  font-weight: 700;
}
h6 {
  font-size: 15px;
  font-weight: 700;
}
b,
strong {
  font-weight: bolder;
}
small {
  font-size: 80%;
}
.eyebrow {
  font-size: 20px;
}
.-text-primary {
  color: #39b982;
}
.-text-base {
  color: #000;
}
.-text-error {
  color: tomato;
}
.-text-gray {
  color: rgba(0, 0, 0, 0.5);
}
.-shadow {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.13);
}
.badge {
  display: inline-flex;
  height: 26px;
  width: auto;
  padding: 0 7px;
  margin: 0 5px;
  background: transparent;
  border-radius: 13px;
  font-size: 13px;
  font-weight: 400;
  line-height: 26px;
}
.badge.-fill-gradient {
  background: linear-gradient(to right, #16c0b0, #84cf6a);
  color: #fff;
}
button,
label,
input,
optgroup,
select,
textarea {
  display: inline-flex;
  font-family: "Open sans", sans-serif;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}

button,
select {
  text-transform: none;
}

label {
  color: rgba(0, 0, 0, 0.5);
  font-weight: 700;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}
</style>
