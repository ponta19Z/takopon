<template>
    <v-data-table
     :headers="header"
     :items="items"
     class="elevation-1"></v-data-table>
</template>

<script lang="ts">
import { Component, Vue, namespace, Action, Getter, State } from 'nuxt-property-decorator'
import { Customer } from "~/store/document";

@Component({})
export default class extends Vue{
    @Action getInfoCustomers!:Function
    @Getter customers!:Customer[] 
    
    headers=[
        {text:'id',value:'id'},
        {text:'name',value:'name'},
        {text:'email',value:'email'},
    ]
    items:any = []
    async created(){
        this.getInfoCustomers();
    this.items = this.customers.map((item:any)=>{
        return{
            id:item.id,
            name:item.name,
            email:item.email
        }
    })

    }
}
</script>