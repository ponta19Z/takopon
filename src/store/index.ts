import { MutationTree, ActionTree, GetterTree, ActionContext } from "vuex";
import axios from "axios";

export interface Customer {
    postId:number
    id:number
    name:string
    email:string
    body:string
}

export interface State{
    customers:Customer[]
}

const state=():State=>{
    return {
        customers:[]
    }
}

const mutations:MutationTree<State>= {
    setCustomer:(state,customers:Customer[]) => (state.customers = customers)
}

const getters: GetterTree<State, any> = {
    customer:(state:State)=>state.customers
}
 
const actions: ActionTree<State, any> ={
    async getInfoCustomers(store:ActionContext<State,any>){
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1/comments");
            store.commit('setCustomer',response.data)
    }
}

