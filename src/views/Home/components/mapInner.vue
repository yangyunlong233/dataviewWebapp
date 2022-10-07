<template>
  <div id="mychart" style="width: 1920px;height: 980px; z-index: 1;"></div>
</template>

<script>
import hanzhong from './610700_full.json'
export default {
  mounted () {
    this.$nextTick(() => {
      this.mychart = this.$echarts.init(document.getElementById('mychart'))
      this.$echarts.registerMap('chosenMap', hanzhong)
      const option = {
        series: [{
          name: '汉中市',
          type: 'map',
          zoom: 0.7,
          mapType: 'chosenMap',
          itemStyle: {
            normal: {
              areaColor: '#9FE3AA',
              borderColor: '#fff',
              label: {
                show: true,
                color: '#2c6642'
              }
            },
            emphasis: {
              areaColor: '#b5f792',
              label: {
                show: true,
                color: '#2c6642'
              }
            }
          },
          roam: true,
          top: '100px',
          data: [{
            name: '西乡县',
            itemStyle: { // 单个区域的样式设置
              color: '#2c6642',
              areaColor: '#2c6642',
              opacity: 1,
              borderColor: '#2c6642'
            },
            label: {
              show: true,
              textStyle: {
                color: '#fff'
              }
            }
          }]
        }]
      }
      this.mychart.on('click', function (params) {
        console.log(params)
      })
      this.mychart.setOption(option)
    })
  }
}
</script>

<style>

</style>
