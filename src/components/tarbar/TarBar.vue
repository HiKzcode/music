<template>
      <div class="Bar" >
        <slot></slot>
      </div>
</template>

<script>
    export default{
      name:'TarBar',
     }
    
</script>

<style>
    .Bar{
        display: flex;
        height: 100px;
        line-height: 100px;
        text-align: center;
        box-shadow: 0 1px 1px rgba(100,100,100,.0.1);
        background-color:rgb(0,169,255);
       color: azure;
       font-size: 20px;
    }
    .left,.right{
      width: 290px;
      height:100px;
    }
    
    .center{
      flex: 1;
    }
</style>