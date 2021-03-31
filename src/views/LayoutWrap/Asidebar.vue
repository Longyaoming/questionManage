<template>
  <div class="Asidebar">
     <el-menu>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>首页</span>
        </template>
      </el-submenu>
    </el-menu>  
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {
    
  },
})


export default class Asidebar extends Vue {}
</script>
