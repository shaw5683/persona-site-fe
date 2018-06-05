<template>
    <div>
      <header>{{title}}</header>
      <nuxt></nuxt>
    </div>
</template>

<script>
	export default {
		name: "login",
    computed: {
      title () {
        let name = this.$route.matched[0].name;
        name = name.split('');
        name[0] = name[0].toUpperCase();
        name = name.join('');
        return name;
      }
    }
	}
</script>

<style scoped>
  header {
    font-size: 46px;
    font-family: "Times New Roman";
    padding: 40px;
  }
</style>
