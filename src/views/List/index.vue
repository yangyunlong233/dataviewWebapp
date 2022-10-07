<template>
  <div class="page list" id="List">
    <mainHeader />
    <sideBar title="数据分析" :menu="menu" />
    <div class="charts-layout">
      <div class="total">
        <div class="item">
          <img src="../../assets/images/icon_list_01.svg">
          <div class="n">入驻企业数量</div>
          <div class="d"><i class="ubm">399</i>家</div>
        </div>
        <div class="item">
          <img src="../../assets/images/icon_list_02.svg">
          <div class="n">交易次数</div>
          <div class="d"><i class="ubm">1499</i>次</div>
        </div>
        <div class="item">
          <img src="../../assets/images/icon_list_03.svg">
          <div class="n">交易总额</div>
          <div class="d"><i class="ubm">23.8</i>亿元</div>
        </div>
      </div>
      <chartsA />
      <chartsB />
      <chartsC />
      <chartsD />
      <chartsE />
      <chartsF />
    </div>
  </div>
</template>

<script>
import mainHeader from '@/components/mainHeader'
import sideBar from '@/components/sideBar'
import chartsA from './components/chartsA.vue'
import chartsB from './components/chartsB.vue'
import chartsC from './components/chartsC.vue'
import chartsD from './components/chartsD.vue'
import chartsE from './components/chartsE.vue'
import chartsF from './components/chartsF.vue'
export default {
  name: 'List',
  data () {
    return {
      menu: ['数据概况', '实时分析', '流量分析', '商品分析', '库存分析', '交易分析', '客户分析', '营销分析']
    }
  },
  components: {
    mainHeader,
    sideBar,
    chartsA,
    chartsB,
    chartsC,
    chartsD,
    chartsE,
    chartsF
  }
}
</script>

<style lang="scss">
.list {
  background-image: url("../../assets/images/main_bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  .charts-layout {
    position: absolute;
    top: 120px;
    right: 20px;
    left: 260px;
    bottom: 20px;
  }
  .total {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    .item {
      width: 280px;
      height: 100px;
      margin: 0 40px;
      background: rgba(42, 90, 59, 0.7);
      border: 1px solid rgba(131, 195, 142, 0.7);
      box-shadow: 0px 4px 4px rgba(117, 203, 133, 0.2);
      border-radius: 8px;
      position: relative;
      img {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 30px;
      }
      .n,.d {
        color: #fff;
        font-size: 16px;
        margin-left: 100px;
      }
      .n {
        margin-top: 20px;
      }
      i {
        font-size: 30px;
        color: #E5F9E2;
      }
    }
  }
}
</style>
