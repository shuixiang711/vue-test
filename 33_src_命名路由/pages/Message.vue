<template>
  <div>
    <ul>
      <li v-for="p in messageList" :key="p.id">
        <!-- 跳转路由并携带query参数，to的字符串写法 -->
       <!--  <router-link :to="`/home/message/detail?id=${p.id}&title=${p.title}`">{{
          p.title
        }}</router-link
        >&nbsp;&nbsp; -->

        <router-link :to="{
            name:'xiangqing',
            query:{
              id:p.id,
              title:p.title
            }
        }">
          {{p.title}}
        </router-link>
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
};
</script>

<style>
</style>