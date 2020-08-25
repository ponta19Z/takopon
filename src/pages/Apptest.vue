<template>
    <div>
        <p>{{counter}}</p>
        <v-btn @click="onClick()">countUp</v-btn>
        <v-btn @click="clear()">clear</v-btn>
        <v-btn @click="countDown()">countDown</v-btn>
        <p>{{lessThanThree}}</p>
    </div>
</template>
<script lang="ts">
import {Component,Vue, Prop, Watch} from 'nuxt-property-decorator'
import axios from 'axios'

@Component({})
export default class extends Vue{
 counter:any=0;
 onClick(){
     return this.counter +=1
 }
 clear(){
     return this.counter=0
 }
 countDown(){
     return this.counter-=1
 }
 get lessThanThree(){
     return this.counter >3?'3より上':'3以下'
 }

     
 
}
</script>