<template>
  <div>
    <h1>当前求和为:{{ sum }}</h1>
    <h3>当前求和放大10倍为:{{ bigSum }}</h3>
    <h3>我在{{ school }},学习{{ subject }}</h3>
    <h3 style="color:red">下组件人数{{ personList.length }}</h3>
    <select v-model.number="num">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(num)">+</button>
    <button @click="decrement(num)">-</button>
    <button @click="incrementOdd(num)">当前求和为奇数再加</button>
    <button @click="incrementWait(num)">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      num: 1, //用户选择的数字
    };
  },
  computed: {
    //借助mapState生成计算属性，从state中读取数据。（对象写法）
    // ...mapState({'he':'sum',school:'school',subject:'subject'}),
    //借助mapState生成计算属性，从state中读取数据。（数组写法）
    ...mapState(["sum", "school", "subject", "personList"]),

    //借助mapGetters生成计算属性，从getters中读取数据。（对象写法）
    // ...mapGetters({bigSum:'bigSum'})
    //借助mapState生成计算属性，从state中读取数据。（数组写法）
    ...mapGetters(["bigSum"]),
  },
  methods: {
    /* increment() {
        this.$store.commit('JIA',this.num)
    },
    decrement() {
        this.$store.commit('JIAN',this.num)
    }, */

    //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(对象写法)
    ...mapMutations({ increment: "JIA", decrement: "JIAN" }),
    //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(数组写法)
    // ...mapMutations(['JIA','JIAN']),
    /* ************************ */
    /* incrementOdd() {
        this.$store.dispatch('jiaOdd',this.num)
    },
    incrementWait() {
        this.$store.dispatch('jiaWait',this.num)
    }, */
    //借助mapActions生成对应的方法，方法中会调用dispatch去联系actions(对象写法)
    ...mapActions({ incrementOdd: "jiaOdd", incrementWait: "jiaWait" }),
    //借助mapActions生成对应的方法，方法中会调用dispatch去联系actions(数组写法)
    // ...mapActions(['jiaOdd','jiaWit'])
  },
};
</script>

<style scoped>
button {
  margin: 4px 10px;
}
</style>