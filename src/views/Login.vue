<template lang="pug"> 
.login
  h1 Login
    //form(action='#' method='method')
  .form
    label(for='username') Username
    input.input(type='text', v-model="username" name="username" placeholder='Enter you name' autofocus=true)
    label(for='password') Password
    input.input(type='password', v-model="password" placeholder='Enter you password')
    //, name='{:password}'
    button.btn.btn-primary(@click="login") Log-in
</template>
<script>
import store from '@/assets/store.js'
export default {
  data() {
    return {
      username: null,
      password: null
    }
  },
  methods: {
    login() {
      // Authenticate a user against the API
      store.user = this.username
      //this.$router.push('/user') - static path
      const redirectPath = this.$route.query.redirect || '/'
      this.$router.push(redirectPath)
    }
  }
}
</script>
<style lang="stylus" scoped>
.form
  display flex
  flex-direction column
  max-width 400px
  margin 0 auto
label
  font-size 1rem
  margin 1rem auto
</style>
