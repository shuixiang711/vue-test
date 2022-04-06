//该文件用于创建vuex中最为核心的store
//引入vue
import Vue from 'vue'
//引入vuex
import vuex from 'vuex'
//使用vuex
Vue.use(vuex)
//准备actions - 用于响应组件的动作
const actions = {
    //context参数是vuex将结合上下文环境将你可能用到的东西包成一个对象context
    /* jia(context, value) {
        context.commit('JIA', value)
    },
    jian(context, value) {
        context.commit('JIAN', value)
    }, */
    jiaOdd(context, value) {
        if (context.state.sum % 2) {
            context.commit('JIA', value)
        }
    },
    jiaWait(context, value) {
        setTimeout(() => {
            context.commit('JIA', value)
        }, 500)
    },
}
//准备mutations - 用于操作数据（state）
const mutations = {
    JIA(state, value) {
        state.sum += value
    },
    JIAN(state, value) {
        state.sum -= value
    },
}
//准备state - 用于存储数据
const state = {
    sum: 0,
    school: "尚硅谷",
    subject:'英语'
}
//准备getters - 用于将state中的数据进行加工
const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}
//创建并暴露store
export default new vuex.Store({
    actions,
    mutations,
    state,
    getters
})
