<template>
  <el-scrollbar class="Asidebar">
     <el-menu :default-active="$router.currentRoute.path" router>
        <template v-for="item in getRouter" v-if="item.children&&item.children.length>0">
            <!--只有一个目录-->
            <el-menu-item :key="item.name" :index="item.children[0].path" v-if="item.children.length === 1">
                <i v-if="item.children[0].meta.icon" :class="item.children[0].meta.icon"></i>
                <span slot="title">{{ item.children[0].meta.title }}</span>
            </el-menu-item>

            <!-- 多个目录 -->
            <el-submenu v-else :key="item.name" :index="item.children[0].path">
                <template slot="title">
                    <i v-if="item.meta.icon" :class="item.meta.icon"></i>
                    <span v-if="item.meta.title">{{item.meta.title}}</span>
                </template>
                <el-menu-item v-for="child in item.children" :key="child.name" :index="child.path">
                    <i v-if="child.meta.icon" :class="child.meta.icon"></i>
                    <span slot="title">{{ child.meta.title }}</span>
                </el-menu-item>

            </el-submenu>
        </template>
        <!-- <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
        </el-menu-item> -->
    </el-menu>  
  </el-scrollbar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Getter, Mutation, Action } from 'vuex-class'
@Component({
  components: {
      
  },
})


export default class Asidebar extends Vue {
    @Getter('routers') getRouter: any;

    mounted () {
        console.log("获取router:",this.getRouter);
    }
}
</script>

<style lang="scss" scoped>
.Asidebar{
    height: 100%;
    border-right: 1px solid #e6e6e6;
    background: #fff;

    .el-menu{
        border-right: 0px;
    }
    i{
        margin-right:5px;
    }

}
</style>
