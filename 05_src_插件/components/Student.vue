/<template>
    <div >
        <h2>学生名称:{{name}}</h2>
        <h2>学生性别:{{sex}}</h2>
        <input type="text" v-fbind:value = 'name'>
        <button @click="test">点我有弹窗</button>
    </div>
</template>

<script>
export default {
    name:'Student',
    data() {
        return {
            name:'张三',
            sex:'男'
        }
    },
    methods: {
        test(){
            this.hello()
        }
    },
}
</script>

<style>
    
</style>