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
                <el-breadcrumb-item @click.native="breadcrumbChange(item)" v-for="(item,index) in routeList" :key="index" :to="{path:item.path}">{{item.title}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <!-- 内容 -->
        <slot name="content"></slot>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue, Watch, Provide } from 'vue-property-decorator';
@Component({
  components: {
    
  },
})
export default class Content extends Vue {
  @Provide() routeList:any;  
  created () {
    this.initRouteCurrData(this.$route);
  }
  
  @Watch("$route") watchRoute(to:any,from:any){
    console.log("aaa:",to);
    this.initRouteCurrData(to);
  }

  initRouteCurrData(info:any):void {
    // {path:"/",title:"知识问答系统"}
    let baseRoute:any = []
    let currMatch = info.matched;
    currMatch.forEach((item:any) => {
        if(item.meta&&item.meta.title){
          let breadcrumbItem = {
            path:item.path ? item.path : '/',
            title:item.meta.title 
          }
          baseRoute.push(breadcrumbItem);
        }
    })
    this.routeList = baseRoute;
  }

  breadcrumbChange(item:any){
    console.log("item:",item);
    this.$forceUpdate();
    if(item.path === "/"){
      console.log("aaa:",this.$router.currentRoute);
      // console.log("首页:",item.path);
      // this.$router.currentRoute.path = "/home";
    }
  }
}
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
