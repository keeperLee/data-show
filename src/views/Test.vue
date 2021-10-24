<template>
  <div class="test">Test-{{message}}</div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
        message: 'hello world'
    }
  }
}
</script>

<style lang="scss" scoped>
  .test{
    color: red
  }
</style>
