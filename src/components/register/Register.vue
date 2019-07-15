<template>
  <div>
    <el-container>
      <el-header>
        <h2>欢迎注册</h2>
      </el-header>
      <el-main>
        <el-row class="jumpLabel">
          <el-col :span="2" :offset="13">
            已有账号，
            <router-link to="/login/Login">点击登录</router-link>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6" :offset="9">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
              <el-form-item label="手机号：" prop="phone" class="demo">
                <el-input v-model="ruleForm.phone" placeholder="请输入手机号码"></el-input>
              </el-form-item>
              <el-form-item label="密码：" prop="password">
                <el-input v-model="ruleForm.password" placeholder="请输入密码"></el-input>
              </el-form-item>
              <el-form-item label="确认密码：" prop="confirmPassword">
                <el-input v-model="ruleForm.confirmPassword" placeholder="请再次输入密码"></el-input>
              </el-form-item>
              <el-form-item label="营业类型：" prop="region">
                <br />
                <el-row :gutter="24">
                  <el-col :span="12">
                    <el-select v-model="ruleForm.region" placeholder="请选择营业类型">
                      <el-option label="类型一" value="shanghai"></el-option>
                      <el-option label="类型二" value="beijing"></el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="12">
                    <el-select v-model="ruleForm.region" placeholder="请选择营业类型">
                      <el-option label="类型一" value="shanghai"></el-option>
                      <el-option label="类型二" value="beijing"></el-option>
                    </el-select>
                  </el-col>
                </el-row>
              </el-form-item>
              <el-form-item label="验证码：" prop="verification">
                <br />
                <el-row :gutter="24">
                  <el-col :span="17">
                    <el-input v-model="ruleForm.verification" placeholder="请输入获取的验证码"></el-input>
                  </el-col>
                  <el-col :span="6">
                    <el-button type="info">获取验证码</el-button>
                  </el-col>
                </el-row>
              </el-form-item>
              <el-form-item>
                <el-checkbox v-model="ruleForm.checked">我接受并同意用户协议</el-checkbox>
              </el-form-item>
              <el-form-item>
                <el-row :gutter="24">
                  <el-col :span="8" :offset="4">
                    <el-button type="primary" @click="submitForm('ruleForm')" class="register">注册</el-button>
                  </el-col>
                  <el-col :span="8">
                    <el-button @click="resetForm('ruleForm')" class="reset">重置</el-button>
                  </el-col>
                </el-row>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      message: "注册",
      ruleForm: {
        phone: "",
        password: "",
        confirmPassword: "",
        region: "",
        verification: "",
        checked: true
      },
      rules: {
        phone: [
          { required: true, message: "请输入手机号码", trigger: "blur" }
          // { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" }
          // { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        confirmPassword: [
          { required: true, message: "请再次输入密码", trigger: "blur" }
          // { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        verification: [
          { required: true, message: "请输入验证码", trigger: "blur" }
          // { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$router.push('/login/Login')
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
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
}

.el-main {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 160px;

  a {
    text-decoration: none;
  }
}

body > .el-container {
  margin-bottom: 40px;
}

.jumpLabel {
  line-height: normal;
}

.register, .reset {
  width: 100%;
}
</style>
