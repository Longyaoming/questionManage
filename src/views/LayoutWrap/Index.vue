<template>
    <div class="layout">
        <!-- 头部 -->
        <LayoutHeader></LayoutHeader>

        <!-- 内容 -->
        <Content>
            <Asidebar slot="left"></Asidebar>
            <router-view slot="content"></router-view>
        </Content>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LayoutHeader from './LayoutHeader.vue';
import Content from './Content.vue';
import Asidebar from './Asidebar.vue';
@Component({
    components: {
        LayoutHeader,Content,Asidebar
    },
})
export default class LayoutWrap extends Vue{
   
}
</script>

<style lang="scss" scoped>
.layout{
    width:100%;
    height:100%;
}
</style>