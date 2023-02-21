<template>
      <div class="ltar-bar-item" @click="LClick">
          <div >
            <slot name="text"></slot>
          </div>
      </div>  
</template>

<script>
   import router from '@/router';
  import VueRouter from 'vue-router';
    export default{
       name:'LTarBarItem',
       props:{
           path:String
       },
       methods:{
          LClick(){
            this.$router.push(this.path).catch(err=>{})
          }
       }
     }
     
</script>

<style>
      .ltar-bar-item{
        height:49px;
        font-size:20px;
        flex: 1;
        text-align: center;
      }
      .ltar-bar-item div{
         margin-top:10px
      }
      .ltar-bar-item div:hover{
          color: red
      }
</style>