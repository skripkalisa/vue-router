<template lang="pug"> 
section.destination
  h1 {{destination.name}}
  .destination-details
    img(:src="require(`@/assets/img/${destination.image}`)", :alt="destination.name")
    p {{ destination.description }}
</template>
<script>
import store from '@/assets/store.js'
export default {
  data() {
    return {
      destinationId: this.$route.params.id
    }
  },
  computed: {
    destination() {
      return store.destinations.find(
        destination => destination.id == this.destinationId
      )
    }
  }
}
</script>
<style lang="stylus" scoped>
img
  max-width 600px
  height auto
  width 100%
  max-height 400px
.destination-details
  display flex
  justify-content space-between
p
  margin 0 40px
  font-size 20px
  text-align left
</style>
