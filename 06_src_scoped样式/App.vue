/<template>
    <div>
        <h1 class="title">你好呀</h1>
        <Student></Student>
        <hr>
        <School></School>
    </div>
</template>

<script>
    import Student from './components/Student.vue'
    import School from './components/School.vue'
    export default {
        name:'App',
        components:{
            School,
            Student
        }
    }
</script>

<style scoped>
    .title{
        color: red;
    }
</style>