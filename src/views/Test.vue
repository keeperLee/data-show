<template>
  <div class="test">Test-{{ message }}</div>
  <div id="container" style="width:400px;height: 400px"></div>
</template>

<script>
export default {
  name: 'Test',
  data() {
    return {
      message: 'hello world'
    }
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      const dom = document.getElementById('container');
      const chart = this.$echarts.init(dom);
      chart.setOption({
        title: {
          text: 'Echarts 入门案例'
        },
        xAxis: {
          data: ['食品', '数码', '服饰', '箱包']
        },
        yAxis: {},
        series: {
          type: 'bar',
          data: [100, 200, 90, 150]
        }
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.test {
  color: red
}
</style>
