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
      slug: this.$route.params.slug
    }
  },
  computed: {
    destination() {
      return store.destinations.find(
        destination => destination.slug === this.slug
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
