<template>
  <!--  <div class="test">Test-{{ message }}{{ state.count }}-->
  <div class="test">
    <div>count:{{ count }}</div>
    <div>doubleCount:{{ doubleCount }}</div>
    <button @click="increment">增加</button>
    <button @click="goToAbout">跳转到about</button>
  </div>
</template>

<script>
import { ref, computed, watch, getCurrentInstance } from 'vue'

export default {
  name: 'Test',
  setup () {
    // 类似 react hooks 中的useState
    // const state = reactive({
    //   count: 1
    // })
    // console.log(this); // 无法获取到this
    const { proxy } = getCurrentInstance()
    console.log(proxy.$root.$router)

    const count = ref(0)

    watch(count, val => {
      console.log(`count is ${val}`)
    })

    const doubleCount = computed(() => count.value * 2)

    const goToAbout = () => {
      proxy.$router.push('/about')
    }

    const increment = () => {
      count.value++
    }
    return {
      count,
      increment,
      doubleCount,
      goToAbout
    }
  }
}
</script>
