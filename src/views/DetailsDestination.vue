<template lang="pug"> 
#details-destination
  ComponentGoBack
  section.destinations
    h1 {{destination.name}}
    .destination-details
      img(:src="require(`@/assets/img/${destination.image}`)", :alt="destination.name")
      p {{ destination.description }}
  section.experiences
    h2 Top experiences in {{destination.name}}
    .cards#experience
      .card(v-for="experience in destination.experiences" :key="experience.slug")
        router-link(:to="{name: 'DetailsExperience',params:{ experienceSlug: experience.slug}, hash: '#experience'}")
          img(:src="require(`@/assets/img/${experience.image}`)", :alt="experience.name")
          span.card__text {{experience.name}}
    router-view(:key="$route.path")

</template>
<script>
import store from '@/assets/store.js'
import ComponentGoBack from '@/components/ComponentGoBack'
export default {
  components: {
    ComponentGoBack
  },
  data() {
    return {}
  },
  props: {
    slug: {
      type: String,
      required: true
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
.experiences
  padding 40px 0
.destination-details
  display flex
  justify-content space-between
p
  margin 0 40px
  font-size 20px
  text-align left
.cards
  display flex
  justify-content space-between
.cards img
  max-height 200px
.card
  padding 0 20px
  position relative
.card__text
  position absolute
  top 50%
  left 50%
  transform translate(-50%, -50%)
  color #fff
  font-size 25px
  font-weight bold
  text-decoration none
</style>
