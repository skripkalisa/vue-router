<template lang="pug"> 
  div
    h1 Not Found
    p The page you tried to visit could not be found or doesn't exit.
    | Try again, 
    router-link(:to="{name: 'Home'}") start from here
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>
<style lang="stylus" scoped></style>
