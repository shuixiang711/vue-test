/<template>
    <div class="school">
        <h2>学校名称:{{name}}</h2>
        <h2>学校地址:{{address}}</h2>
        <button @click="sendSchoolName">把学校名给App</button>
    </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'School',
    data() {
        return {
            name:'尚硅谷atguigu',
            address:'北京'
        }
    },
    methods:{
        sendSchoolName(){
            this.getSchoolName(this.name)
        }
    },
    mounted(){
       /*  this.$bus.$on('hello',(date)=>{
            console.log('我是school组件，我接受到了',date);
        }) */
        this.pubid = pubsub.subscribe('hello',(msgName,data)=>{
            console.log('有人发布hello消息，school接收到了订阅的hello消息',msgName,data);
        })
    },
    beforeDestroy(){
        // this.$bus.$off('hello')
        pubsub.unsubscribe(this.pubid)
    }
}
</script>

<style scoped>
    .school{
        background-color: orange;
        padding: 5px;
        margin-top: 10px;
    }
</style>