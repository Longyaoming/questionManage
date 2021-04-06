<template>
  <div class="login-header">
      <div class="logoHeader">
        <!-- <img src="@/assets/img/logo.png"/> -->
        <span class="title">问答后台管理系统</span>
      </div>
      <div class="logonInfo">
          夜来风月声，花落知多少
      </div>
      <div class="content">
          <slot name="container"></slot>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue }  from 'vue-property-decorator';
@Component({
    components: {
        
    },
})
export default class LayoutHeader extends Vue{}
</script>

<style lang="scss" scoped>
.login-header{
    width:30%;
    margin:0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .logoHeader{
        width:100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .title{
            font-weight: bold;
            font-size:28px;
            margin-bottom: 30px;
        }
    }
    .logonInfo{
        font-size:16px;
        color:#ddd;
    }
    .content{
        border:1px #ddd solid;
        width:100%;
        min-height: 40px;
        box-shadow: 0px 0px 10px #ddd;
        margin-top: 30px;
        padding: 30px;
        box-sizing: border-box;
    }
}
</style>