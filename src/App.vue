<template>
  <div id="app">
  
    <MainTarBar>
    </MainTarBar>
    <MLTarBar v-if="!$route.meta.hidelbar">
    </MLTarBar>
    <router-view/>
  </div>
</template>
<script>
    
    import MainTarBar from './components/MainTarBar'
    import MLTarBar from './components/MLTarBar'
    export default{
      name:'App',
     components:{
        MainTarBar,MLTarBar
   },method:{
       
   }
}

</script>
<style>
   @import url("./assets/css/base.css");
</style>



