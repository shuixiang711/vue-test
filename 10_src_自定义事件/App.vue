/<template>
  <div class="app">
    <h1>{{ msg }}，学生姓名是{{studentName}}</h1>
    <School :getSchoolName="getSchoolName"></School>
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第一种写法 使用v-on或@) -->
    <!-- <Student v-on:atguigu="getStudentName" @demo="m1"></Student> -->

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第一种写法 使用ref) -->
    <Student ref="student"></Student>
  </div>
</template>

<script>
import Student from "./components/Student.vue";
import School from "./components/School.vue";
export default {
  name: "App",
  data() {
    return {
      msg: "你好啊",
      studentName:''
    };
  },
  components: {
    School,
    Student,
  },
  methods: {
    getSchoolName(name) {
      console.log(name);
    },
    getStudentName(name) {
      console.log(name);
      this.studentName = name
    },
    m1() {
      console.log("demo事件被触发了");
    },
  },
  mounted() {
    this.$refs.student.$on("atguigu", this.getStudentName); //绑定自定义事件
    // this.$refs.student.$once("atguigu", this.getStudentName);
  },
};
</script>

<style scoped>
.app {
  background-color: red;
  margin: 0 10px;
}
</style>