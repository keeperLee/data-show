<template>
  <!--  <div class="test">Test-{{ message }}{{ state.count }}-->
  <div class="test">
    <div>count:{{ count }}</div>
    <div>doubleCount:{{ doubleCount }}</div>
    <button @click="increment">增加</button>
    <button @click="goToAbout">跳转到about</button>
    <div>number:{{ number }}</div>
    <button @click="updateNumber">update number</button>
    <div>aa:{{ aa }}</div>
    <div>bb:{{ bb }}</div>
    <div @click="updateAA">updateAA</div>
    <div>getters aa:{{
        gettersAA
      }}
    </div>
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
    const number = computed(() => proxy.$store.state.number)
    const aa = computed(() => proxy.$store.state.a.aa)
    const bb = computed(() => proxy.$store.state.b.bb)
    const gettersAA = computed(() => proxy.$store.getters.aaValue)

    const updateNumber = () => {
      // proxy.$store.commit('SET_NUMBER', count.value * 50)
      proxy.$store.dispatch('setNumber', count.value * 50)
    }
    const updateAA = () => {
      // proxy.$store.commit('SET_NUMBER', count.value * 50)
      proxy.$store.commit('SET_AA', proxy.$store.state.a.aa * 50)
    }

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
      goToAbout,
      number,
      updateNumber,
      aa,
      bb,
      updateAA,
      gettersAA
    }
  }
}
</script>
