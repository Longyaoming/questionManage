<template>
  <div class="password">
    <LoginHeader>
        <el-form :model="ruleInfo" :rules="rules" ref="ruleForm" label-position="left" label-width="0" slot="container">
            <div class="title">
                <h3>找回密码</h3>
            </div>

            <!--username-->
            <el-form-item prop="username">
                <el-input v-model="ruleInfo.username">
                    <i slot="prefix" class="fa fa-user-o"></i>
                </el-input>
            </el-form-item>
            <!--email-->
            <el-form-item  prop="email">
                <el-input v-model="ruleInfo.email">
                    <i slot="prefix" class="fa fa-email"></i>
                </el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" style="width:100%;" @click.native.prevent="confirm()">确认</el-button>
            </el-form-item>
        </el-form>
    </LoginHeader>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide }  from 'vue-property-decorator';
import LoginHeader from './LoginHeader.vue';
@Component({
    components: {
        LoginHeader
    },
})
export default class Password extends Vue{
    @Provide() ruleInfo: {
        username:String,
        email:String,
    } = {
        username: "",
        email: ""
    }

    @Provide() rules = {
          name: [{ required: true, message: '请输入账号', trigger: 'blur' }],
          email: [{ required: true, message: '请输入邮箱', trigger: 'blur' }],
    }

    confirm(): void{    
        console.log("点击了确认")
    }
}
</script>

<style lang="scss" scoped>
.password{
    width:100%;
    height:100%;
    display: flex;
}
.title{
    text-align: center;
    margin-bottom:30px;
}
i{
    font-size:14px;
    margin-left:8px;
}
</style>