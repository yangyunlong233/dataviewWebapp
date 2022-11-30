<template>
  <div class="page map-inner" id="MapInner">
    <mainHeader/>
    <div class="charts-layout">
      <div class="table-header">
        <h1>{{ cnName }}<span>茶叶产业数据</span></h1>
        <div class="upgrade-date">数据时间<input value="2020年"><i><img src="../../assets/images/icon_header_area_change.svg"></i></div>
      </div>
      <div class="table-content left-table">
        <h2>茶叶产量</h2>
        <table>
          <tr>
            <td class="td-center">总产量</td>
            <td>{{clData[0]}}</td>
          </tr>
          <tr>
            <td class="td-center">亩产</td>
            <td>{{clData[1]}}</td>
          </tr>
          <tr>
            <td class="td-center">汉中仙毫</td>
            <td>{{clData[2]}}</td>
          </tr>
          <tr>
            <td class="td-center">汉中毛尖</td>
            <td>{{clData[3]}}</td>
          </tr>
          <tr>
            <td class="td-center">汉中炒青</td>
            <td>{{clData[4]}}</td>
          </tr>
          <tr>
            <td class="td-center">汉中红</td>
            <td>{{clData[5]}}</td>
          </tr>
          <tr>
            <td class="td-center">汉中白茶</td>
            <td>{{clData[6]}}</td>
          </tr>
          <tr>
            <td class="td-center">黑毛茶</td>
            <td>{{clData[7]}}</td>
          </tr>
        </table>
      </div>
      <div class="table-content mid-table">
        <h2>{{czData[0]}}</h2>
        <table>
          <tr>
            <td class="td-center">总产值</td>
            <td>{{czData[1]}}</td>
          </tr>
          <tr>
            <td class="td-center">均价</td>
            <td>{{czData[2]}}</td>
          </tr>
          <tr>
            <td class="td-center">汉中仙毫</td>
            <td>{{czData[3]}}</td>
          </tr>
          <tr>
            <td class="td-center">汉中毛尖</td>
            <td>{{czData[4]}}</td>
          </tr>
          <tr>
            <td class="td-center">汉中炒青</td>
            <td>44725万元</td>
          </tr>
          <tr>
            <td class="td-center">汉中红</td>
            <td>{{czData[5]}}</td>
          </tr>
          <tr>
            <td class="td-center">汉中白茶</td>
            <td>{{czData[6]}}</td>
          </tr>
          <tr>
            <td class="td-center">黑毛茶</td>
            <td>{{czData[7]}}</td>
          </tr>
        </table>
      </div>
      <div class="table-content right-table">
        <h2>涉茶镇</h2>
        <table v-for="item, index in sczData" :key="index">
          <tr>
            <td colspan="3"  class="td-center">
              <i class="prev"><img src="../../assets/images/icon_arrow_prev.svg"></i>
              <span>--- {{item.t1}} --- {{item.t2}} ---</span>
              <i class="prev"><img src="../../assets/images/icon_arrow_next.svg"></i></td>
          </tr>
          <tr v-for="i in item.d" :key="i">
            <td class="td-center">{{i[0]}}</td>
            <td class="td-center">{{i[1]}}</td>
            <td class="td-center">{{i[2]}}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import mainHeader from '@/components/mainHeader'
export default {
  name: 'MapInner',
  data () {
    return {
      clData: [
        '6697吨', '49.2kg', '256吨', '652吨', '5561吨', '197吨', '1吨', '30吨'
      ],
      czData: [
        '95560万元', '142.7元', '23040万元', '16952万元', '44725万元', '10760万元', '20万元', '63万元'
      ],
      sczData: [
        {
          name: '天明镇',
          t1: '共23个村/社区',
          t2: '38600亩',
          d: [
            ['盐井村', '1200', '优生区'],
            ['中台村', '745', '优生区'],
            ['天明社区', '135.8', '优生区'],
            ['三化村', '12500', '优生区'],
            ['瓦屋村', '571.2', '优生区'],
            ['玉皇村', '1400', '优生区'],
            ['分水村', '1200', '优生区'],
            ['二里山村', '400', '优生区'],
            ['黄沙村', '2300', '优生区'],
            ['金牛村', '9600', '优生区']
          ]
        }
      ],
      cnName: ''
    }
  },
  components: {
    mainHeader
  },
  mounted () {
    switch (this.$route.query.aera) {
      case 'chengguxian':
        this.cnName = '城固县'
        break
      case 'xixiangxian':
        this.cnName = ' 西乡县'
        break
      case 'yangxian':
        this.cnName = '洋县'
        break
      case 'zhenbaxian':
        this.cnName = '镇巴县'
        break
      case 'nanzhengqu':
        this.cnName = '南郑区'
        break
      case 'mianxian':
        this.cnName = '勉县'
        break
      case 'liubaxian':
        this.cnName = '留坝县'
        break
      case 'ningxqiangxian':
        this.cnName = '宁强县'
        break
      case 'fopingxian':
        this.cnName = '佛坪县'
        break
      case 'hantaiqu':
        this.cnName = '汉台区'
        break
    }
  }
}
</script>

<style lang="scss">
.map-inner {
  background-image: url("../../assets/images/main_bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  .charts-layout {
    position: absolute;
    top: 120px;
    right: 20px;
    left: 20px;
    bottom: 20px;
  }
  .table-header {
    position: relative;
    width: auto;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(131, 195, 142, 0.7);
    h1 {
      font-family: txb;
      color: #fff;
      font-size: 3rem;
      span {
        padding: 0 10px;
        font-family: txl;
        font-size: 2.4rem;
      }
    }
    .upgrade-date {
      position: absolute;
      right: 0;
      top: 10px;
      font-size: 1.6rem;
      color: #fff;
      input {
        width: 15rem;
        height: 3rem;
        border-radius: 4px;
        padding: 0 10px;
        margin: 0 0 0 10px;
        background: rgba(42, 90, 59, 0.7);
        border: 1px solid rgba(131, 195, 142, 0.7);
        color: #fff;
        font-family: txb;
        font-size: 2rem;
      }
      i {
        position: absolute;
        right: 10px;
        top: 8px;
      }
    }
  }
  .table-content {
    position: absolute;
    top: 90px;
    bottom: 30px;
    h2 {
      font-size: 1.5rem;
      font-family: txb;
      color: #fff;
      padding-bottom: 10px;
      text-align: center;
    }
    table {
      width: 100%;
      height: 100%;
      border: 1px solid rgba(131, 195, 142, 0.7);
      border-collapse: collapse;
    }
    tr td {
      background: rgba(42, 90, 59, 0.7);
      border: 1px solid rgba(131, 195, 142, 0.7);
      padding: 0 10px;
      font-size: 1.5rem;
      font-family: txb;
      color: #fff;
    }
    td.td-center {
      text-align: center;
      font-family: txl;
      span {
        font-family: txb;
        font-size: 1.8rem;
        padding: 0 20px;
      }
    }
  }
  .left-table {
    left: 0;
    width: 300px;
  }
  .mid-table {
    left: 340px;
    width: 400px;
  }
  .right-table {
    left: 780px;
    width: 1100px;
  }
}
</style>
