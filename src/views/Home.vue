<template lang="pug">
.home
  h1 All Destinations
  .destinations
    div(v-for="destination in destinations" :key="destination.name")
      router-link(:to="{name:'DestinationDetails', params:{id: destination.id}}")
        h2 {{ destination.name }}
      figure
        router-link(:to="{name:'DestinationDetails', params:{id: destination.id}}")
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
  max-width 1400px
  margin 0 auto
img
  max-width 200px
.destinations
  display flex
  justify-content space-between
</style>
