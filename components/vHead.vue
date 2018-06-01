<template>
    <header>
      <div class="name">Shaw's personal site</div>
      <v-menu></v-menu>
      <div class="btn-group">
        <nuxt-link to="/login">
          <el-button type="info" size="small">登录</el-button>
        </nuxt-link>
        <nuxt-link to="/register">
          <el-button type="info" size="small">注册</el-button>
        </nuxt-link>
      </div>
    </header>
</template>

<script>
import vMenu from './vMenu';

export default {
  name: "vHead",
  components: {
    vMenu
  }
};
</script>

<style lang="scss" scoped>
  header {
    display: flex;
    width: 100%;
    height: 60px;
    background-color: #24292e;
    align-items: center;
    justify-content: space-around;
    .name {
      font-weight: bold;
      color: #ccc;
      font-size: 28px;
    }
    .btn-group {
      a {
        margin-right: 10px;
      }
    }
  }
</style>
