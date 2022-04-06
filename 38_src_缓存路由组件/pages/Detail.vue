<template>
  <ul>
    <li>消息编号:{{ id }}</li>
    <li>消息内容:{{ title }}</li>
    <li>{{a}}</li>
    <li>{{b}}</li>
  </ul>
</template>

<script>
export default {
  name:'Detail',
  props:['id','title','a','b']
};
</script>

<style>
</style>