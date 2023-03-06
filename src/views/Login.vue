<template>

  <el-row type="flex" class="row-bg" justify="center">

    <el-col :span="6">
      <h2>欢迎来这里玩</h2>
      <el-image :src="require('@/assets/2.png')" ></el-image>
      <p>这是一个Vue管理网站</p>
      <p>技术栈包括Vue2、element-ui</p>
    </el-col>

    <el-col :span="1">
        <el-divider direction="vertical"></el-divider>
    </el-col>

    <el-col :span="6">
      <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="code">
          <el-input v-model="loginForm.code" style="width:150px;float: left"></el-input>
          <el-image :src="captchaImg" class="captchaImg"></el-image>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')">立即创建</el-button>
          <el-button @click="resetForm('loginForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-col>


  </el-row>


</template>

<script>
import qs from "qs";

export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: '',
        password:'',
        code:'',  //状态码
        token:''   //验证码
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }

        ],
        code: [
          {required: true, message: '请输入验证码', trigger: 'blur'},
          {min: 5, max: 5, message: '验证码为5个字符', trigger: 'blur'}
        ],

      },
      captchaImg:'',

    };
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios.post("/login"+qs.stringify(this.loginForm)).then(res =>{
            console.log("res"+res);
           const jwt = res.headers['authorization']  //后端生成的jwt令牌
            // 将jwt存储到应用store中
            this.$store.commit("SET_TOKEN",jwt)
            console.log("jwt"+jwt);
        /*    this.$store.commit("SET_TOKEN", jwt)表示调用store中的SET_TOKEN方法，
            所以我们需要在store中编写方法*/
            //点击登录，将jwt-token存到本地的localstorage后 跳转到index页面
           this.$router.push("/index")

          }).catch(error =>{
            this.getCaptchaImg();
            console.log('error submit!!!!')
          })
         // alert('submit!');
        } else {
          this.getCaptchaImg();
          console.log('error submit!!');
          return false;
        }
      });
    },



    resetForm(formName) {
      this.$refs[formName].resetFields();
    },




    getCaptchaImg(){
      this.$axios.get("/captcha",this.loginForm).then(res =>{

        console.log("/captcha");
        console.log(res);


      this.loginForm.token=res.data.data.token;   // res.data是返回的结果  .data是data属性
        this.captchaImg=res.data.data.captchaImg;  // 不是loginForm.captchaImg
        this.loginForm.code = ''     //code是状态码  200 或400 之类的
      })
    }
  //  Result:  code   msg   data


  },

  created() {
    this.getCaptchaImg();   //一开始加载就启动
  }

}




</script>

<style scoped>

    .el-row {
      background-color: #fafafa;
      height:100%;    /* ?100%为什么没有全部铺满*/
      display:flex;   /*横轴居中*/
      align-items: center;  /*垂直居中*/
      text-align: center; /*文字居中*/
    }

    .el-divider {
      height: 200px;

    }

</style>

