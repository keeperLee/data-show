<template>
  <div class="test">Test-{{ message }}</div>
</template>

<script>
import { reactive, watchEffect } from 'vue'
// 类似 react hooks 中的useState
const state = reactive({
  count: 1
})

const increment = () => {
  state.count++
}
// 类似 react hoos中的 useEffect
watchEffect(() => {
  document.body.innerHTML = `count: ${state.count}`
  document.body.addEventListener('click', increment)
})
export default {
  name: 'Test',
  data () {
    return {
      message: 'hello world'
    }
  }
}
</script>
