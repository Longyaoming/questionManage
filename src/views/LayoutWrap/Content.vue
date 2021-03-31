<template>
  <el-container class="content">
    <!--左边区域-->
    <el-aside width="200px">
        <slot name="left"></slot>
    </el-aside>
    <!--右边内容区域-->
    <el-main>
        <!--面包屑-->
        <div class="breadWrap">
            <i class="fa fa-reorder" style="margin-right:10px;"></i>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>首页</el-breadcrumb-item>
                <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <!-- 内容 -->
        <slot name="content"></slot>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {
    
  },
})


export default class Content extends Vue {}
</script>

<style lang="scss" scoped>
.content{
    width:100%;
    height: calc(100% - 60px);
    .breadWrap{
        border-bottom: 1px #ddd solid;
        padding-bottom: 10px;
        display: flex;
        align-items: center;    
    }
}
</style>
