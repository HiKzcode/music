<template>
  
  <div class="tar-bar-item" @click="itemClike">
    <div>
       <slot></slot>
   </div>
 </div>

</template>
<script>
import router from '@/router';
import VueRouter from 'vue-router';

export default{
     name:"TabBarItem", 
     props:{
       path:String
     },
     methods:{
      itemClike(){
        this.$router.push(this.path).catch(err=>{})
      }
     }
  }
 
</script>
<style>
</style>