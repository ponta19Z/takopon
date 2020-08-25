import { MutationTree, ActionTree, GetterTree } from "vuex";
import axios from "axios";

export interface Customer {
    postId:number
    id:number
    name:string
    email:string
    body:string
}
export interface RootState{

}

export interface State{
    customers:Customer[]
}

const state=()=>{
    customers:[]
}
 
const getters: GetterTree<State, RootState> = {
    customer:(state:State)=>state.customers
}
 
const mutations:MutationTree<State>= {
    setCustomer:(state,customers:Customer[]) => (state.customers = customers)
}
 
 
const actions: ActionTree<State, RootState> ={
    getInfoCustomers:async({commit})=>{
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1/comments");
            commit('setCustomer',response.data)
        } catch(error){
            commit('setCustomer',[])
        }
    }
}
