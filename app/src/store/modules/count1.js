export default {
    namespaced: true,
    state: () => ({
        count1: 1
    }),
    mutations: {
        add(state) {
            state.count1++
        }
    },
    actions: {
        asyncAdd({commit}) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    commit('add')
                    resolve(true)
                }, 1000);
            })
        }
    },
    getters: {
        doubleCount1(state){
            return state.count1*2
        }
    },
}