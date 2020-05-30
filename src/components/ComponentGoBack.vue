<template lang="pug"> 
span.go-back
  button(@click="goBack") Go Back
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    goBack() {
      return this.$router.go(-1)
    }
  }
}
</script>
<style lang="stylus" scoped>
.go-back
  display flex
  cursor pointer
button
  border 0
</style>
