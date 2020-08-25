<template>
    <div class="component">
        <p>{{message}}</p>
    </div>
</template>
<script lang="ts">
import {Component,Vue, Prop } from 'nuxt-property-decorator'

@Component({})
export default class extends Vue{
    @Prop()
    message:string=''
}
</script>