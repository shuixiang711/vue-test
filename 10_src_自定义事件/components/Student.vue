/<template>
  <div class="student">
    <h2>学生名称:{{ name }}</h2>
    <h2>学生性别:{{ sex }}</h2>
    <button @click="sendStudentName">点我把学生名给App</button>
    <button @click="unbind">解绑atguigu事件</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      sex: "男",
    };
  },
  methods: {
    sendStudentName() {
      //触发Student组件实例身上的atguigu事件
      this.$emit("atguigu", this.name);
    //   this.$emit("demo");
    },
    unbind() {
      // this.$off('atguigu')    //解绑一个自定义事件
      this.$off(["atguigu","demo"]);
    //   this.off() //解绑所有自定义事件
    },
  },
};
</script>

<style lang="less">
.student {
  background-color: skyblue;
  padding: 5px;
  margin-top: 10px;
}
</style>