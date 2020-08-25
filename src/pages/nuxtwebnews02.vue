<template>
  <v-card class="mx-auto" max-width="600">
    <v-system-bar class="indigo darken-2" dark>
      <v-spacer />
      <v-icon>mdi-window-minimize</v-icon>
      <v-icon>mdi-window-maximize</v-icon>
      <v-icon>mdi-close</v-icon>
    </v-system-bar>

    <v-toolbar color="indigo" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-tool-bar-title>Discover your news</v-tool-bar-title>
      <v-spacer />
      <v-btn icon>
        <v-icon>mdi-mgnify</v-icon>
      </v-btn>
    </v-toolbar>

    <v-container fluid>
      <v-row dense>
        <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
          <v-card>
            <v-img :src="card.urlToImage" height="200px">
              <v-card-title v-text="card.author"></v-card-title>
            </v-img>
            <v-card-actions>
              <v-spacer />

              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <v-btn icon @click="send">
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import axios from "axios";

@Component({})
export default class extends Vue {
  cards:[]=[]
    async created(){
        const response = await axios.get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=98bdd8ad9d8d49738dbd74adb2aa4f2e');
        this.cards = response.data.articles.map((article: any) => ({
      title: article.title,
      author: article.author,
      urlToImage: article.urlToImage,
      flex:6
    }));}

  async send() {}
}
</script>