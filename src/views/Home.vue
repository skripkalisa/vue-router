<template lang="pug">
.home
  h1 All Destinations
  .destinations
    div(v-for="destination in destinations" :key="destination.name")
      router-link(:to="{name:'DetailsDestination', params:{slug: destination.slug}}")
        h2 {{ destination.name }}
      figure
        router-link(:to="{name:'DetailsDestination', params:{slug: destination.slug}}")
          img(:src="require(`@/assets/img/${destination.image}`)", :alt="destination.name")

</template>

<script>
// @ is an alias to /src
import store from '@/assets/store.js'

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      destinations: store.destinations
    }
  }
}
</script>
<style lang="stylus" scoped>
.home
  max-width 2400px
  margin 0 auto

.destinations
  display flex
  justify-content center
  flex-flow row wrap
.destinations img
  max-width 30rem
a
  color lightseagreen
  text-decoration none
a:hover,
a:visited
  text-decoration underline
</style>
