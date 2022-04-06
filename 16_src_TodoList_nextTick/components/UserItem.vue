<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @click="handleCheck(todo.id)"
      />
      <span v-show="!todo.isEdit">{{ todo.title }}</span>
      <input
        type="text"
        v-show="todo.isEdit"
        :value="todo.title"
        @blur="handleBlur(todo, $event)"
        ref="inputTitle"
      />
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    <button
      v-show="!todo.isEdit"
      class="btn btn-edit"
      @click="handleEdit(todo)"
    >
      编辑
    </button>
  </li>
</template>

<script>
import pubsub from "pubsub-js";
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
        // this.$bus.$emit('deleteTodo', id);
        pubsub.publish("deleteTodo", id);
      }
    },
    handleEdit(todo) {
      todo.isEdit = true;
      // this.$set(todo,'isEdit',true)
      //在下一次DOM更新后执行本次回调
      this.$nextTick(()=>{
        this.$refs.inputTitle.focus() 
      })
    },
    //失去焦点回调（真正执行修改逻辑）
    handleBlur(todo, event) {
      todo.isEdit = false;
      if (!event.target.value.trim()) {
        alert("输入不能为空");
      } else {
        this.$bus.$emit("updateTodo", todo.id, event.target.value);
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
  margin-right: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>