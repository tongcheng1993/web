import {queryListDicItem} from '../api/dicApi'

export default {
    state: {
        dic: {
            area_type:[],

        },
    },
    mutations: {
        setDicItemList(state, data) {
            state.dic[data.code]=data.list
        }
    },
    actions: {
        setDicItemList(context,data){
            if(context.state.dic[data.code] && context.state.dic[data.code].length > 0 ){

            }else{
                let parameter = {
                    dicCode: data.code
                }
                queryListDicItem(parameter).then((res) => {
                    let vo ={
                        code: data.code,
                        list :res
                    }
                    context.commit('setDicItemList',vo)
                })
            }
        }
    },
    getters: {

    }
}