<template>
    <div>
        <h2>{{ message }}</h2>
        <v-text-field 
            type="text" 
            v-model="search"       
            filled
            outlined
            placeholder="search"
            label="search"></v-text-field>
        <v-data-table
         dense
         :headers="header"
         :items="users"
         :search="search"
         class="elevation-1"
         >
         <template v-slot:items="{ users }">
             <tbody>
                 <tr v-for="user in users" :key="user.email">
                     <td>{{user.name}}</td>
                     <td>{{user.email}}</td>
                     <td>{{user.website}}</td>
                 </tr>
             </tbody>
         </template>
        </v-data-table>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import axios from 'axios'

@Component({})
export default class extends Vue{
    message:string='Search/Filter In Table'
    search:string=''
    header = [
        {text:'name',value:'name'},
        {text:'email',value:'email'},
        {text:'website',value:'website'}
    ]
    users:[]=[]
    async mounted(){
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        this.users = response.data.map((user:any)=>({
            name:user.name,
            email:user.email,
            website:user.website
        }));
    }
}
</script>