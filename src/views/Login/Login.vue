<template>
  <div class="login">
    <LoginHeader>
        <el-form ref="ruleForm" :model="ruleInfo" :rules="rules" label-position="left" label-width="0px" slot="container">
            <div class="title">
                <h3>账号登陆</h3>
            </div>
            <!--username-->
            <el-form-item prop="username">
                <el-input type="text"  v-model="ruleInfo.username" auto-complete="off" placeholder="账号">
                    <i slot="prefix" class="fa fa-user-o"></i>
                </el-input>
            </el-form-item>
            <!--password-->
            <el-form-item prop="pwd">
                <el-input type="password"  v-model="ruleInfo.pwd" auto-complete="off" placeholder="密码">
                    <i slot="prefix" class="fa fa-lock"></i>
                </el-input>
            </el-form-item>
            <!--登陆button-->
            <el-form-item>
                <el-button :loading="isLoading" type="primary" style="width:100%;" @click.native.prevent="submitLogin()">登录</el-button>
            </el-form-item>
            <!--7天自动登录和忘记密码-->
            <el-form-item>
                <el-checkbox v-model="ruleInfo.autologin" :checked="ruleInfo.autologin">7天自动登录</el-checkbox>
                <el-button type="text" @click="$router.push({name:'Password'})" class="forget-password">忘记密码</el-button>
            </el-form-item>
        </el-form>
    </LoginHeader>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide }  from 'vue-property-decorator';
import LoginHeader from './LoginHeader.vue';
import { $http } from '@/axiosRequest/request'

@Component({
    components: {
        LoginHeader
    },
})
export default class Login extends Vue{
    @Provide() isLoading: Boolean = false;  //默认关闭按钮旋转
    @Provide() ruleInfo: {
        username:String,
        pwd:String,
        autologin:Boolean
    } = {
        username: "",
        pwd: "",
        autologin :true
    }

    @Provide() rules= {
        username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        pwd: [{ required: true, message: '请输入密码', trigger: 'blur' }]
    }

    //点击登录
    submitLogin(): void {
        (this.$refs["ruleForm"] as any).validate((valid : Boolean) => {
            if(valid){
                //加载loading框
                this.isLoading = true;
                $http("/api/users/login",this.ruleInfo)
                .then((res: any) => {
                    this.isLoading = false;
                    localStorage.setItem("tsToken",res.token);
                    this.$router.push({name:'dashboad'})
                })
                .catch((err: any) => {
                    this.isLoading = false;
                })
            }
        })
    }
}    
</script>

<style lang="scss" scoped>
.login{
    width:100%;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.title{
    text-align: center;
    margin-bottom:30px;
}
i{
    font-size:14px;
    margin-left:8px;
}
.forget-password{
    color:cornflowerblue;
    font-size:14px;
    float: right;
}
</style>