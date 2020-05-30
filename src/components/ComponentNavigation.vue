<template lang="pug"> 
  #nav
    p.logo Vue School Router tutorial
    ul.nav-links
      li.links
        router-link(to="/") Home
      li.links(v-for="destination in destinations" :key="destination.name")
        router-link(:to="{name: 'DetailsDestination',params: {slug:destination.slug}}")
          | {{destination.name}}
      li.links()
        router-link(to="/user") Dashboard
</template>
<script>
import store from '@/assets/store'
export default {
  data() {
    return {
      destinations: store.destinations
    }
  }
}
</script>
<style lang="stylus" scoped>
#nav

  display flex
  align-items center
  position sticky
  top 0
  background-color #fff
  border-bottom 1px solid grey
  z-index 1

#nav a
  font-weight bold
  color darkgreen
  text-decoration none
#nav a.router-link-exact-active
  color lightgreen
.nav-links
  display flex
.links
  padding-right 20px
  list-style none
.links:hover
  text-decoration underline
.logo
  font-size 20px
  color purple
  font-weight bold
</style>
