<template>
    <div>
        <LTarBar route v-model="active" >
            <LTarBarItem path="/home">
                <div slot="text">首页</div>
            </LTarBarItem>
            <LTarBarItem path="/category">
                <div slot="text">歌曲分类</div>
            </LTarBarItem>
            <LTarBarItem path="/user">
                <div slot="text">个人信息</div>
            </LTarBarItem>
            <LTarBarItem path="/songsheet">
                <div slot="text">我的歌单</div>
            </LTarBarItem>
        </LTarBar>
    </div>
</template>

<script>
    import LTarBar from "./ltarbar/LTarBar"
    import LTarBarItem from "./ltarbar/LTarBarItem"
    export default{
       name:'MLTarBar',
       components:{
           LTarBar,
           LTarBarItem
       }
    }
</script>

<style>
 
</style>