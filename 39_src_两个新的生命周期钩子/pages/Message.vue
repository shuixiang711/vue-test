<template>
  <div>
    <ul>
      <li v-for="p in messageList" :key="p.id">
        <!-- 跳转路由并携带params参数，to的字符串写法 -->
        <!-- <router-link :to="`/home/message/detail/${p.id}/${p.title}`">{{
          p.title
        }}</router-link> -->

        <!-- 跳转路由并携带params参数，to的params写法 -->
        <router-link :to="{
            name:'xiangqing', //params写法此处不能使用path
            params:{
              id:p.id,
              title:p.title
            }
        }">
          {{p.title}}
        </router-link>
        <button @click="pushShow(p)">push查看</button>
        <button @click="replaceShow(p)">replace查看</button>
      </li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messageList: [
        { id: "001", title: "消息1" },
        { id: "002", title: "消息2" },
        { id: "003", title: "消息3" },
        { id: "004", title: "消息4" },
      ],
    };
  },
  methods:{
    pushShow(p){
      this.$router.push({
        name:'xiangqing', //params写法此处不能使用path
            params:{
              id:p.id,
              title:p.title
            }
      })
    },  
    replaceShow(p){
      this.$router.replace({
            name:'xiangqing', //params写法此处不能使用path
            params:{
              id:p.id,
              title:p.title
            }
      })
    },
  }
};
</script>

<style>
</style>