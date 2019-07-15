<template>
  <div>
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="2" :offset="10">
            <h3>
              <span class="quickLogin" @click="quickLogin">快捷登录</span>
            </h3>
          </el-col>
          <el-col :span="2">
            <h3>
              <span class="ordinaryLogin" @click="ordinaryLogin">普通登录</span>
            </h3>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <el-row>
          <el-col :span="6" :offset="9">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
              <div v-if="isHave">
                <el-form-item label="商户ID：" prop="merchantID">
                  <el-input v-model="ruleForm.merchantID" placeholder="请输入8位商户ID"></el-input>
                </el-form-item>
                <el-form-item label="用户名：" prop="username">
                  <el-input v-model="ruleForm.username" placeholder="请输入4位用户名"></el-input>
                </el-form-item>
                <el-form-item label="密码：" prop="password">
                  <el-input v-model="ruleForm.password" placeholder="请输入用户密码" key="password"></el-input>
                </el-form-item>
              </div>
              <el-form-item label="账号：" prop="accountNumber" v-if="!isHave">
                <el-input v-model="ruleForm.accountNumber" placeholder="已绑定的手机/邮箱/QQ号"></el-input>
              </el-form-item>
              <el-form-item label="密码：" prop="password" v-if="!isHave">
                <el-input v-model="ruleForm.password" placeholder="请输入用户密码" key="password"></el-input>
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
    var validateMerchantID = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入8位商户ID"));
      } else {
        callback();
      }
    };
    var validateUsername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        callback();
      }
    };
    var validatePassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    var validateAccountNumber = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入已绑定的手机/邮箱/QQ号"));
      } else {
        callback();
      }
    };
    return {
      isHave: true,
      ruleForm: {
        merchantID: "",
        username: "",
        accountNumber: "",
        password: ""
      },
      rules: {
        merchantID: [
          { required: true, validator: validateMerchantID, trigger: "blur" }
        ],
        username: [
          { required: true, validator: validateUsername, trigger: "blur" }
        ],
        accountNumber: [
          { required: true, validator: validateAccountNumber, trigger: "blur" }
        ],
        password: [
          { required: true, validator: validatePassword, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    quickLogin() {
      this.isHave = false;
    },
    ordinaryLogin() {
      this.isHave = true;
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$router.push('/Pos')
        } else {
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
