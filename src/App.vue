<template lang="pug">
#app
  ComponentNavigation
  router-view(:key="$route.path")
</template>

<script>
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import ComponentNavigation from '@/components/ComponentNavigation.vue'
export default {
  name: 'app',
  components: {
    Home,
    About,
    ComponentNavigation
  }
}
</script>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
