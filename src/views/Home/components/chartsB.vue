<template>
  <div class="charts-b" id="chartsB">
    <charstTitle cn="茶企总产值" en="value of tea enterprises" />
    <ul class="enterprises">
      <li v-for="v, k in chartData" :key="k" v-show="show ? k < 6 : k >= 6">
        <div class="line"><span class="current" :style="{width: v.current}"></span><span class="prev" :style="{width: v.prev}"></span></div>
        <div class="name"><i class="txb">{{v.name}}</i></div>
        <div class="d1"><i class="txl">{{v.d1}}吨</i></div>
        <div class="d2"><i class="txl">{{v.d2}}</i></div>
        <div class="icon"><img :src="v.x == '+' ? iconUp : iconDown"></div>
      </li>
    </ul>
  </div>
</template>

<script>
import charstTitle from './chartsTitle.vue'
export default {
  name: 'chartsB',
  data () {
    return {
      show: true,
      iconDown: require('../../../assets/images/icon_charts_down.svg'),
      iconUp: require('../../../assets/images/icon_charts_up.svg'),
      chartData: [
        {
          name: '陕西东裕生物科技股份有限公司',
          current: '100%',
          prev: '88%',
          d1: '450',
          d2: '12000',
          x: '+'
        },
        {
          name: '宁强县千山茶业公司',
          current: '92%',
          prev: '90%',
          d1: '350',
          d2: '5800',
          x: '+'
        },
        {
          name: '南郑县汉山茶叶有限公司',
          current: '88%',
          prev: '85%',
          d1: '162',
          d2: '5650',
          x: '+'
        },
        {
          name: '陕西省鹏翔茶业有限公司',
          current: '81%',
          prev: '85%',
          d1: '310',
          d2: '5600',
          x: '-'
        },
        {
          name: '陕西绿娇子农业开发有限公司',
          current: '75%',
          prev: '81%',
          d1: '196',
          d2: '5580',
          x: '-'
        },
        {
          name: '陕西怡溪春茶业科技有限公司',
          current: '87%',
          prev: '76%',
          d1: '200',
          d2: '5200',
          x: '+'
        },
        {
          name: '汉中山花茶业有限公司',
          current: '81%',
          prev: '71%',
          d1: '410',
          d2: '4865',
          x: '+'
        },
        {
          name: '西乡县南山茶业有限责任公司',
          current: '81%',
          prev: '71%',
          d1: '295',
          d2: '4800',
          x: '+'
        },
        {
          name: '陕西省咏德茶业公司',
          current: '73%',
          prev: '71%',
          d1: '200',
          d2: '4200',
          x: '+'
        },
        {
          name: '陕西琼熙茶叶有限责任公司',
          current: '65%',
          prev: '71%',
          d1: '98',
          d2: '3850',
          x: '-'
        },
        {
          name: '陕西天赐秦韵茶叶有限公司',
          current: '88%',
          prev: '85%',
          d1: '234',
          d2: '3400',
          x: '+'
        },
        {
          name: '陕西西乡罗镇延宾茶业有限公司',
          current: '78%',
          prev: '89%',
          d1: '160',
          d2: '3200',
          x: '-'
        }
      ]
    }
  },
  mounted () {
    this.setAnimation()
  },
  methods: {
    setAnimation () {
      setInterval(() => { this.show = !this.show }, 5000)
    }
  },
  components: {
    charstTitle
  }
}
</script>

<style lang="scss" scoped>
.charts-b {
  position: absolute;
  z-index: 9;
  top: 430px;
  left: 25px;
  width: 542px;
  padding: 20px;
  background: rgba(#002208, .3);
  .enterprises {
    width: 100%;
    margin-top: 25px;
    height: 220px;
    overflow: hidden;
    li {
      display: flex;
      flex-flow: row nowrap;
      margin: 15px 0;
      div {
        font-size: 14px;
        flex-shrink: 0;
      }
      .line {
        flex-shrink: 1;
        position: relative;
        width: 120px;
        margin-right: 10px;
        .current {
          position: absolute;
          top: 5px;
          right: 0;
          height: 5px;
          background: #63e6b7;
        }
        .prev {
          position: absolute;
          top: 12px;
          right: 0;
          height: 5px;
          background: #d4deec;
        }
      }
      .name {
        width: 250px;
        color: #fff;
      }
      .d1 {
        width: 40px;
        text-align: right;
        color: #fff;
      }
      .d2 {
        width: 90px;
        text-align: right;
        color: #fff;
      }
      .icon {
        width: 25px;
        text-align: right;
        img {
          position: relative;
          top: 3px;
        }
      }
    }
  }
}
</style>
