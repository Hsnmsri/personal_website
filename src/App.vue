<template>
  <div :style="'width: ' + windowWidth + 'px;height: ' + windowHeight + 'px'">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  mounted() {
    setInterval(() => {
      this.windowWidth = window.innerWidth;
      this.windowHeight = window.innerHeight;
    }, 1);
  },
  data() {
    return {
      windowWidth: null,
      windowHeight: null,
    };
  },
};
</script>
