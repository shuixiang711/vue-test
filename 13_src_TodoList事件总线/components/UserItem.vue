<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @click="handleCheck(todo.id)"
      />
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: "UserItem",
  //声明接收todo对象
  props: ["todo"],
  methods: {
    //勾选或者取消勾选
    handleCheck(id) {
      //通知App勾选或者取消对象的todo
      this.$bus.$emit("checkTodo", id);
    },
    //删除
    handleDelete(id) {
      if (confirm("确定删除嘛")) {
          this.$bus.$emit('deleteTodo', id);
      }
    },
  },
};
</script>

<style scoped>
/*item*/
li:hover {
  background-color: #ddd;
}
li:hover button {
  display: block;
}
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>