<template lang="pug">
#app
  ComponentNavigation
  transition(name="fade" mode="out-in"  )
    //(name="slide" mode="out-in")(name="moveUp" )
    router-view(:key="$route.path")
    //-(:key="$route.path")
</template>

<script>
// import Home from '@/views/Home.vue'
// import About from '@/views/About.vue'
import ComponentNavigation from '@/components/ComponentNavigation.vue'
export default {
  name: 'app',
  components: {
    // Home,
    // About,
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
.slide-enter-active,
.slide-leave-active
  transition opacity .3s, transform .3s
.slide-enter,
.slide-leave-to
  opacity 0
  transform translateX(-30%)
.moveUp-enter-active
  animation fadeIn 0.01s ease-in
@keyframes fadeIn
  0%
    opacity 0
  50%
    opacity 0.5
  100%
    opacity 1
.moveUp-leave-active
  animation moveUp 0.3s ease-in
@keyframes moveUp
  0%
    transform translateY(0)
  100%
    transform translateY(-400px)
.fade-enter-active,
.fade-leave-active
  transition opacity .1s
.fade-enter,
.fade-leave-to
  opacity 0.3
.input
  border 1px solid green
  padding 10px
  margin-bottom 20px
.btn
  background-color green
  color #fff
  padding 10px
</style>
