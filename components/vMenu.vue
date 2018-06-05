<template>
  <ul class="menu">
    <li class="menu-item">
      <nuxt-link to="/">Home</nuxt-link>
    </li>
    <li class="menu-item">
      <nuxt-link to="/blog">Blog</nuxt-link>
    </li>
  </ul>
</template>

<script>
	export default {
		name: "vMenu"
	}
</script>

<style lang="scss" scoped>
  .menu {
    height: 100%;
    .menu-item {
      display: inline-block;
      height: 100%;
      a {
        width: 70px;
        text-align: center;
        color: #f7f8fb;
        text-decoration: none;
        display: block;
        height: 100%;
        line-height: 60px;
        &.nuxt-link-exact-active {
          background-color: #fff;
          color: rgb(37, 46, 47);
        }
        &:hover {
          background-color: rgba(255, 255, 255, 0.2);
          color: #fff;
        }
      }
    }
  }
</style>
