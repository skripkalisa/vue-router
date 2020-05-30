<template lang="pug"> 
#user
  h1 Welcome {{user}}
  p
    router-link(:to="{name: 'Account'}") Account
  button.btn.btn-primary(@click="logOut") Logout
</template>
<script>
import store from '@/assets/store.js'
export default {
  data() {
    return {
      user: store.user
    }
  },
  methods: {
    logOut() {
      store.user = null
      this.$router.push('/')
    }
  }
}
</script>
<style lang="stylus" scoped></style>
