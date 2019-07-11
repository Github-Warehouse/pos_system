<template>
  <div>
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="2">
            <div>我的资料</div>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <el-row>
          <el-col :span="8" :offset="8">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
              <el-form-item label="商户ID：" prop="businessID">
                <el-input v-model="ruleForm.businessID" placeholder="请输入商户ID"></el-input>
              </el-form-item>
              <el-form-item label="用户名：" prop="username">
                <el-input v-model="ruleForm.username" placeholder="请输入用户名"></el-input>
              </el-form-item>
              <el-form-item label="密码：" prop="password">
                <el-input v-model="ruleForm.password" placeholder="请输入密码">
                  <el-button slot="append">修改密码</el-button>
                </el-input>
              </el-form-item>
              <el-form-item label="所属行业：" prop="industry">
                <el-input v-model="ruleForm.industry" placeholder="请输入所属行业"></el-input>
              </el-form-item>
              <el-form-item label="邮编：" prop="zipCode">
                <el-input v-model="ruleForm.zipCode" placeholder="请输入邮编"></el-input>
              </el-form-item>
              <el-form-item label="所属区域：" prop="region">
                <br />
                <el-row :gutter="24">
                  <el-col :span="8">
                    <el-select v-model="ruleForm.region" placeholder="请选择所属区域">
                      <el-option label="类型一" value="shanghai"></el-option>
                      <el-option label="类型二" value="beijing"></el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="8">
                    <el-select v-model="ruleForm.region" placeholder="请选择所属区域">
                      <el-option label="类型一" value="shanghai"></el-option>
                      <el-option label="类型二" value="beijing"></el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="8">
                    <el-select v-model="ruleForm.region" placeholder="请选择所属区域">
                      <el-option label="类型一" value="shanghai"></el-option>
                      <el-option label="类型二" value="beijing"></el-option>
                    </el-select>
                  </el-col>
                </el-row>
                <el-form-item label="通讯地址：" prop="address">
                  <el-input v-model="ruleForm.address" placeholder="请输入通讯地址"></el-input>
                </el-form-item>
                <el-form-item label="联系人：" prop="contacts">
                  <el-input v-model="ruleForm.contacts" placeholder="请输入联系人"></el-input>
                </el-form-item>
                <el-form-item label="手机号：" prop="phone">
                  <el-input v-model="ruleForm.phone" placeholder="请输入手机号码"></el-input>
                </el-form-item>
                <el-form-item label="QQ：" prop="qq">
                  <el-input v-model="ruleForm.qq" placeholder="请输入QQ号码"></el-input>
                </el-form-item>
                <el-form-item label="邮箱：" prop="email">
                  <el-input v-model="ruleForm.email" placeholder="请输入邮箱地址"></el-input>
                </el-form-item>
                <el-form-item label="传真：" prop="fax">
                  <el-input v-model="ruleForm.fax" placeholder="请输入传真"></el-input>
                </el-form-item>
              </el-form-item>
              <el-form-item>
                <el-row :gutter="24">
                  <el-col :span="12" :offset="6">
                    <el-button type="primary" @click="submitForm('ruleForm')" class="register">保存</el-button>
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
  name: "PersonalAccount",
  data() {
    return {
      ruleForm: {
        businessID: "",
        username: "",
        password: "",
        industry: "",
        zipCode: "",
        region: "",
        address: "",
        contacts: "",
        phone: "",
        qq: "",
        email: "",
        fax: ""
      },
      rules: {
        businessID: [
          { required: true, message: "请输入手机号码", trigger: "blur" }
          // { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        username: [
          { required: true, message: "请再次输入密码", trigger: "blur" }
          // { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" }
          // { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        industry: [
          { required: true, message: "请输入所属行业", trigger: "blur" }
          // { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        zipCode: [
          { required: true, message: "请输入邮编", trigger: "blur" }
          // { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        address: [
          { required: true, message: "请输入通讯地址", trigger: "change" }
        ],
        contacts: [
          { required: true, message: "请输入联系人", trigger: "change" }
        ],
        phone: [
          { required: true, message: "请输入手机号码", trigger: "blur" }
          // { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        qq: [
          { required: true, message: "请输入QQ号码", trigger: "blur" }
          // { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        email: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" }
          // { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        fax: [
          { required: true, message: "请输入传真", trigger: "blur" }
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
}

.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  background-color: #ffffff;
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

.register, .reset {
  width: 100%;
}
</style>
