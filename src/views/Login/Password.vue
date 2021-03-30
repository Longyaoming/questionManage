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
                    <i slot="prefix" class="fa fa-envelope-o"></i>
                </el-input>
            </el-form-item>

            <el-form-item>
                <el-button :loading="isLoading" type="primary" style="width:100%;" @click.native.prevent="confirm()">确认</el-button>
            </el-form-item>
        </el-form>
    </LoginHeader>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide }  from 'vue-property-decorator';
import LoginHeader from './LoginHeader.vue';
import { $http } from '@/axiosRequest/request'
import { Message, Loading } from 'element-ui'

@Component({
    components: {
        LoginHeader
    },
})
export default class Password extends Vue{
    @Provide() isLoading: boolean = false;
    @Provide() ruleInfo: {
        username:String,
        email:String,
    } = {
        username: "",
        email: ""
    }

    @Provide() rules = {
          username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
          email: [
              { required: true, message: '请输入邮箱地址', trigger: 'blur' },
              { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
          ],
    }

    confirm(): void{    
        (this.$refs.ruleForm as any).validate((valid: Boolean):void => {
            if(valid){
                this.isLoading = true;
                $http("/api/users/findPwd",this.ruleInfo)
                .then((res:any) => {
                    this.isLoading = false;
                    Message({
                        message: res.msg,
                        type: 'success'
                    });
                })
                .catch((err:any) => {
                    this.isLoading = false;
                })
            }else{
                console.log("shibai");
            }
        })
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