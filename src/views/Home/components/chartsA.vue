<template>
  <div class="charts-a" id="chartsA">
    <charstTitle cn="茶区数据" en="Tea garden data" />
    <div class="total"><img src="@/assets/images/charts_a_total.svg"></div>
    <ul class="area">
      <li v-for="v, i in chartData" :key="i">
        <span class="ic"></span>
        <span class="tt txb">{{v.name}}</span>
        <span class="d1 txl">{{v.d1}}</span>
        <span class="d2 txl">{{v.d2}}</span>
      </li>
    </ul>
    <div class="data">茶园总面积<i class="ubm">297</i>万亩</div>
  </div>
</template>

<script>
import charstTitle from './chartsTitle.vue'
export default {
  name: 'chartsA',
  data () {
    return {
      chartData: [
        {
          name: '西乡县',
          d1: '1136亩',
          d2: '36%'
        },
        {
          name: '南郑区',
          d1: '987亩',
          d2: '21%'
        },
        {
          name: '勉县',
          d1: '435亩',
          d2: '17%'
        },
        {
          name: '宁强县',
          d1: '215亩',
          d2: '13%'
        },
        {
          name: '城固县',
          d1: '178亩',
          d2: '11%'
        },
        {
          name: '镇巴县',
          d1: '155亩',
          d2: '10%'
        },
        {
          name: '略阳县',
          d1: '131亩',
          d2: '9%'
        },
        {
          name: '洋县',
          d1: '121亩',
          d2: '9%'
        }
      ]
    }
  },
  components: {
    charstTitle
  }
}
</script>

<style lang="scss" scoped>
.charts-a {
  position: absolute;
  z-index: 9;
  top: 110px;
  left: 25px;
  width: 542px;
  padding: 20px;
  background: rgba(#002208, .3);
  .total {
    position: absolute;
    top: 80px;
    left: 20px;
  }
  .area {
    padding: 30px 0 0 180px;
    li {
      margin: 10px 25px 15px 0;
      font-size: 14px;
      color: #fff;
      display: inline-block;
      width: 162px;
      span {
        display: inline-block;
        vertical-align: middle;
      }
      .ic {
        width: 15px;
        height: 15px;
        margin-right: 5px;
        border-radius: 4px;
        background: #e1ffbc;
      }
      .tt {
        width: 50px;
      }
      .d1 {
        width: 55px;
        text-align: right;
      }
      .d2 {
        width: 37px;
        text-align: right;
      }
    }
    li:nth-of-type(even) {
      margin-right: 0;
      .ic {
          background: #63e6b7;
        }
    }
  }
  .data {
    font-size: 16px;
    color: #DEF6E5;
    i {
      padding: 0 10px;
      font-size: 20px;
    }
  }
}
</style>
