<template>
  <el-form :model="form" :rules="formRules" ref="form" class="form-container">
    <el-form-item label="用户名" prop="username">
      <el-input v-model="form.username"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="form.password" type="password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('form')">登录</el-button>
      <el-button type="info" @click="toRegister">注册</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
	export default {
		name: "index",
    layout: 'login',
    data () {
      return {
        form: {
          username: '',
          password: ''
        },
        formRules: {
          username: [
            {
              required: true,
              message: '请输入用户名',
              trigger: 'blur'
            }
          ],
          password: [
            {
              required: true,
              message: '请输入密码',
              trigger: 'blur'
            }
          ]
        }
      }
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            alert('submit');
          } else {
            return;
          }
        })
      },
      toRegister () {
        this.$router.push('register');
      }
    }
	}
</script>

<style scoped>
  .form-container {
    width: 600px;
    margin: 50px auto;
  }
</style>
