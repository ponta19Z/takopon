 <template>
  <div>
    <h2>{{message}}</h2>
    <v-text-field
     type="text"
     v-model="search"
     filled
     outlined
     label="search"></v-text-field>
    
    <v-data-table 
     dense 
     :headers="headers" 
     :items="items"
     :search="search" 
     class="elevation-1">
      <template v-slot:body="{items}">
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.email}}</td>
            <td>{{item.name}}</td>
            <td>{{item.status}}</td>
            <td><v-btn @click="deleteRow(item)">{{item.delete}}</v-btn></td>
          </tr>
        </tbody>
      </template>
    </v-data-table>
    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import axios from "axios";

@Component({})
export default class AxiosPractice extends Vue {
  items: any = [];
  status: string = "";
  message:string='Search/Filter In Table'
  search:string= ""

  headers = [
    { text: "id", value: "id" },
    { text: "name", value: "name" },
    { text: "email", value: "email" },
    { text: "status", value: "status" },
    { text: "delete", value: "delete" }
  ];
  async mounted() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1/comments"
    );
    this.items = response.data.map((item: any) => {
      const newStatus =
        item.id === 1 || item.id === 3 ? "supercustomer" : "";
      const deleteButton = 'delete'
      return {
        id: item.id,
        email: item.email,
        name: item.name,
        status: newStatus,
        delete:deleteButton
      };
    });
  }
  deleteRow(item:any){
       let index=this.items.findIndex((it:any)=>it.id===item.id)
        this.items.splice(index,1);
  }
}
</script>