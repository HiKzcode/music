<template>   
    <div class="Main-t"> 
    <TarBar>
        <TarBarItem class="left">
          <img  src="../assets/img/01.webp">
        </TarBarItem>
        <TarBarItem class="center">
          <div>欢迎来到酷狗界面，祝您可以听歌愉快，右边可以登录听歌</div>
        </TarBarItem>
        <TarBarItem class="right" path="/login">
          <div>
               <button type="reset">
                <span>登录</span>
              </button>
         </div>
        </TarBarItem>
        
    </TarBar>
    </div>
</template>

<script>
    import TarBar from './tarbar/TarBar'
    import TarBarItem from './tarbar/TarBarItem'
    export default{
       name:'MainTarBar',
       components:{
         TarBar,
         TarBarItem
       },
      
    }
</script>

<style>
  
   .left img{
       height: 80px;
       margin-left: 180px;
       margin-top: 9px;
    }
    .right button{
        background-color: rgb(240, 253, 255);
        font-size: 35px;
        border-radius: 40px;
        width: 120px;
       
    }
    
    .right button:hover{
        background-color: gainsboro;
        text-align: center;
    }
    .right span{
        font-size:25px;
        letter-spacing: 5px;
        font-weight: bold;
    }
</style>