<template>
  <label>
    <input type="checkbox" />
    <div class="like-btn-svg"></div>
    <slot></slot>
  </label>
</template>

<script>
export default {};
</script>

<style lang="scss">
.like-btn-svg {
  width: 50px;
  height: 50px;
  background: url(https://abs.twimg.com/a/1446542199/img/t1/web_heart_animation.png)
    no-repeat;
  background-size: 2900%;
  background-position: left;
  cursor: pointer;

  &:hover {
    background-position: right;
  }
}

input[type="checkbox"] {
  display: none;
}

input:checked + .like-btn-svg {
  transition: background 0.8s steps(28);
  animation: fave-like-btn-svg 0.8s steps(28);
  background-position: right;
}

@keyframes fave-like-btn-svg {
  from {
    background-position: left;
  }
  to {
    background-position: right;
  }
}
</style>
