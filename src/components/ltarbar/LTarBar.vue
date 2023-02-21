<template>
       <div class="lbar">
         <slot></slot>
       </div>
</template>

<script>
    export default{
        name:'LTarBar'
    }
</script>

<style>
     .lbar{
       background-color: azure;
       display: flex;
       box-shadow: 0px -1px 1px rgba(100,100,100,0.2);
     }
</style>