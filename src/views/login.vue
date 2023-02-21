<template>
    
    <div class="container">
        <form action="">
             <div class="title">Login</div>
             <div class="item">
                <label>用户名：</label>
                <input type="text"  v-model="uid" placeholder="请输入用户名">
                <!-- v-model把输入的值传输给name变量 -->
              </div>
              <div class="item">
                <label>密码:</label>
                <input type="password" v-model="password" placeholder="请输入密码">
              </div>   <!-- v-on点击按钮触发Admin方法 -->
            <div class="item">
               <button @click="Admin" type="button">登录</button>
            </div>  
        </form>      
    </div>
</template>
   
<script>
  export default{
    name:'login',
    data(){
      return{
         /*uid:'',
         password:'',
         returnarr:'',*///后端传过来储存用户数据的数组
      }
    },
    created(){        
   },
   methods:{
      //点击登录
      Admin(){
        // this.sentData()
         console.log(this.uid)
      },
      //接收服务器传来数据
     /* sentData(){
         this.$axios({
            method:'post',
            url:'',
            data:{
               uid:this.uid,
               password:this.password
            }
         }).then(function(res){

      });
    },
   /*slovedata(){
       if(){
         localStorage.setItem('token',res.data.token)
       } 
    }*/
   }
 }
</script>

<style>
     .container{
       display: flex;
        background-image:url(../assets/img/02.jpg) ;
        width: 1600px;
        height: 600px;
       background-size: cover;
       background-repeat: no-repeat;
       /*align-items: center;*/
       justify-content: center;
     }

     form{
      width: 400px;
      height: 300px;
      background-color: rgba(247,247,247,.3);
      border:1px solid #e4e4e4;
      color: #000;
      text-align: center;
      margin-top: 100px;
      border-radius: 5px;
     }
     .title{
      font-size: 30px;
     }
    .item
     {
      width: 100%;
      height: 35px;
      line-height: 35px;
      margin-top: 40px;
     }
     .item input{
      width: 60%;
      height: 25px;
      line-height: 25px;
      border: 1px solid #DADADA;
      color: #888;
      font-size: 12px;
      box-shadow: inset 0px 1px 4px #ECECEC;
     }
     .item button{
        width: 50%;
        height: 50px;
        background-color: rgba(100, 205, 237, 0.471);
        border-radius: 5px;
     }
   
     
</style>