<template lang="pug"> 
  #nav
    p.logo Vue School Router tutorial
    ul.nav-links
      li.links
        router-link(to="/") Home
      li.links(v-for="destination in destinations" :key="destination.name")
        router-link(:to="{name: 'DestinationDetails',params: {id:destination.id}}")
          | {{destination.name}}

</template>
<script>
import store from '@/assets/store'
export default {
  data() {
    return {
      destinationId: this.$route.params.id,
      destinations: store.destinations
    }
  }
}
</script>
<style lang="stylus" scoped>
#nav

  display flex

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
