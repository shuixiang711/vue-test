<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: "About",
  //通过路由规则，进入该组件时调用
  beforeRouteEnter(to, from, next) {
    if (to.meta.isAuth) {
      //是否需要检查权限
      if (localStorage.getItem("school") === "atguigu") {
        next();
      } else {
        alert("学校名称不对,无权查看");
      }
    } else {
      next();
    }
  },
  afterRouteLeave(to, from, next) {},
};
</script>

<style>
</style>