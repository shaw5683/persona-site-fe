<template>
  <el-form class="form-container" :model="form" :rules="formRules" ref="form" status-icon>
    <nuxt-link to="login">已有账号？去登录</nuxt-link>
    <el-form-item label="用户名" prop="username">
      <el-input v-model="form.username"></el-input>
    </el-form-item>
    <el-form-item label="性别" prop="sex">
      <el-radio v-model="form.sex" label="男"></el-radio>
      <el-radio v-model="form.sex" label="女"></el-radio>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input type="password" v-model="form.password"></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="passwordConfirm">
      <el-input type="password" v-model="form.passwordConfirm"></el-input>
    </el-form-item>
    <el-form-item label="手机号码" prop="phoneNumber">
      <el-input v-model="form.phoneNumber"></el-input>
    </el-form-item>
    <el-form-item label="电子邮箱" prop="email">
      <el-input v-model="form.email"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('form')">提交</el-button>
      <el-button @click="resetForm('form')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import axios from '~/plugins/axios';

  export default {
		name: "index",
    layout: 'login',
    data () {
      let validateUsername = (rule, value, callback) => {
        if (value && !/^[a-zA-Z][A-Za-z0-9_]{5,19}$/.test(value)) {
          callback(new Error('用户名为字母开头，由字母、数字或者下划线组成'));
        } else {
          axios.get('/checkRepeat', {
            params: {
              username: this.form.username
            }
          }).then(res => {
            if (res.data.repeat) {
              callback(new Error('用户名已存在'));
            } else {
              callback();
            }
          })
        }
      };

      let confirmPass = (rule, value, callback) => {
        if (value !== this.form.password) {
          callback(new Error('确认密码与密码不一致'));
        } else {
          callback();
        }
      };

      let validatePhone = (rule, value, callback) => {
        if (value && !/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/.test(value + '')) {
          callback(new Error('请输入正确的手机号码'));
        } else {
          callback();
        }
      };

      let validateEmail = (rule, value, callback) => {
        if (value && !/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(value)) {
          callback(new Error('请输入正确的email地址'));
        } else {
          callback();
        }
      };

      return {
        form: {
          username: '',
          sex: '',
          email: '',
          phoneNumber: '',
          password: '',
          passwordConfirm: ''
        },
        formRules: {
          username: [
            {
              required: true,
              message: '请输入用户名',
              trigger: 'blur'
            },
            {
              min: 6,
              max: 20,
              message: '用户名长度为6-20位',
              trigger: 'blur'
            },
            {
              validator: validateUsername,
              trigger: 'blur'
            }
          ],
          password: [
            {
              required: true,
              message: '请输入密码',
              trigger: 'blur'
            },
            {
              min: 8,
              max: 20,
              message: '密码长度为8-20位',
              trigger: 'blur'
            }
          ],
          passwordConfirm: [
            {
              required: true,
              message: '请确认密码',
              trigger: 'blur'
            },
            {
              validator: confirmPass,
              trigger: 'blur'
            }
          ],
          sex: [
            {
              required: true,
              message: '请选择性别'
            }
          ],
          phoneNumber: [
            {
              validator: validatePhone,
              trigger: 'blur'
            }
          ],
          email: [
            {
              validator: validateEmail,
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
            axios.post('/register', this.form).then(res => {
              console.log(res)
            })
          } else {
            return;
          }
        })
      },
      resetForm (formName) {
        this.$refs[formName].resetFields();
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
