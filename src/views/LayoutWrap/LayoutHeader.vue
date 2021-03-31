<template>
    <div class="layoutHeader">
        <div class="logo">
            这是一个全新的面试问答系统
        </div>
        <div class="personInfo">
            小明同学
            <img src="@/assets/img/editor.jpg" />
        </div>
    </div>
</template>

<script lang= "ts">
import { Component, Vue } from 'vue-property-decorator'

export default class LayoutHeader extends Vue {

}
</script>

<style lang="scss" scoped>
.layoutHeader{
    display: flex;
    height:60px;
    width: 100%;
    align-items: center;
    background: #999;;

    .logo{
        flex:1;
        margin-left:20px;
        height: 100%;
        display: flex;
        align-items: center;
        color:#ffffff;
    }
    .personInfo{
        flex:1;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-right: 20px;
        img{
            height: 100%;
            border-radius: 50%;
            margin-left:15px;
        }
    }
}
</style>