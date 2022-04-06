/<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <School></School>
    <Student></Student>
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
    };
  },
  components:{Student,School}
};
</script>

<style scoped>
.app {
  background-color: red;
  margin: 0 10px;
}
</style>