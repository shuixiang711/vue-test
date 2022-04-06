<template>
  <div>
    <ul>
      <li :style="{opacity}">欢迎学习vue</li>
      <li>news001 <input type="text">   </li>
      <li>news002<input type="text"></li>
      <li>news003<input type="text"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      a:false,
      opacity:1
    }
  },
  /* mounted(){
    this.timer = setInterval(() => {
      this.opacity -= 0.02
      if (this.opacity<=0) {
        this.opacity = 1
      }
    }, 16);
  },
  beforeDestroy() {
    clearInterval(this.timer)
  }, */
  activated(){
     this.timer = setInterval(() => {
      this.opacity -= 0.02
      if (this.opacity<=0) {
        this.opacity = 1
      }
    }, 16);
  },
  deactivated() {
    clearInterval(this.timer)
  },
};
</script>

<style>
</style>