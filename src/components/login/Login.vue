<template>
  <div>
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="2" :offset="10">
            <h3>
              <span class="quickLogin">快捷登录</span>
            </h3>
          </el-col>
          <el-col :span="2">
            <h3>
              <span class="ordinaryLogin">普通登录</span>
            </h3>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <el-row>
          <el-col :span="6" :offset="9">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
              <el-form-item label="账号：" prop="username" class="demo">
                <el-input v-model="ruleForm.username" placeholder="已绑定的手机/邮箱/QQ号"></el-input>
              </el-form-item>
              <el-form-item label="密码：" prop="password">
                <el-input v-model="ruleForm.password" placeholder="请输入用户密码"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
              </el-form-item>
              <el-row>
                <el-col :span="4" :offset="6">
                  <router-link to="/register/Register">
                    <span class="registeredAccount">注册账户</span>
                  </router-link>
                </el-col>
                <el-col :span="4">|</el-col>
                <el-col :span="4">
                  <span class="forgetPassword">忘记密码</span>
                </el-col>
              </el-row>
            </el-form>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          {
            required: true,
            message: "请输入已绑定的手机/邮箱/QQ号",
            trigger: "blur"
          }
          // { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" }
          // { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
div {
  height: 100%;
  background-color: #b3c0d1;
}

.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;

  .quickLogin, .ordinaryLogin {
    cursor: pointer;
    font-weight: 100px;
  }
}

.el-main {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-button--primary {
  width: 100%;
  margin-top: 8%;
}

.el-main[data-v-08b4fdc3] {
  line-height: normal;

  a {
    text-decoration: none;
    color: #333;
  }

  .registeredAccount, .forgetPassword {
    cursor: pointer;
  }
}
</style>
