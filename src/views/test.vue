<template>
  <div>
    <div class="tab">11</div>
    <button v-on:click="show = !show">点我</button>
    <transition name="fade">
      <p v-show="show" v-bind:style="styleobj">动画实例</p>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      styleobj: {
        fontSize: "30px",
        color: "red",
      },
    };
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
  -moz-transition: opacity 2s;
  -webkit-transition: opacity 2s;

  -o-transition: opacity 2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.tab {
  width: 100px;
  border: 1px solid red;
  transition: width 2s;
  -webkit-transition: width 2s; /* Safari */
}
.tab:hover {
  width: 300px;
}
</style>
