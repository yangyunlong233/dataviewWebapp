<template>
  <div class="charts-e" id="chartsE">
    <charstTitle cn="茶产区实况" en="Annual yield of tea varieties" />
    <div class="cover">
      <img v-show="(img === 1)" src="../../../assets/images/e/1.jpg">
      <img v-show="(img === 2)" src="../../../assets/images/e/2.jpg">
      <img v-show="(img === 3)" src="../../../assets/images/e/3.jpg">
      <img v-show="(img === 4)" src="../../../assets/images/e/4.jpg">
      <img v-show="(img === 5)" src="../../../assets/images/e/5.jpg">
    </div>
    <div class="cont">
      <div class="prev"><img src="../../../assets/images/icon_arrow_prev.svg"></div>
      <div class="next"><img src="../../../assets/images/icon_arrow_next.svg"></div>
      <div class="tt"><img src="../../../assets/images/icon_wind.svg"></div>
      <div class="item">
        <span>当前风速</span>
        <span>0.19m/s</span>
      </div>
      <div class="item">
        <span>平均风速</span>
        <span>0.13m/s</span>
      </div>
      <div class="item">
        <span>最高风速</span>
        <span>0.5m/s</span>
      </div>
    </div>
  </div>
</template>

<script>
import charstTitle from './chartsTitle.vue'
export default {
  name: 'chartsE',
  data () {
    return {
      chartData: [],
      img: 1,
      op: 1
    }
  },
  components: {
    charstTitle
  },
  mounted () {
    setInterval(() => {
      if (this.img === 5) {
        this.img = 1
      } else {
        this.img++
      }
    }, 4200)
  }
}
</script>

<style lang="scss" scoped>
.charts-e {
  position: absolute;
  z-index: 9;
  top: 660px;
  right: 25px;
  width: 542px;
  padding: 20px;
  background: rgba(#002208, .3);
  .cover {
    margin: 20px 0 0;
    width: 100%;
    height: 310px;
    img {
      width: 100%;
      height: 100%;
    }
  }
    .cont {
      position: absolute;
      left: 20px;
      right: 20px;
      bottom: 20px;
      background: rgba(#000, .6);
      height: 50px;
      margin: 20px 0 0;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-around;
      padding: 10px 40px 0;

      .prev,
      .next {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 15px;
        height: 12px;

        img {
          height: 100%;
        }
      }

      .prev {
        left: 20px;
      }

      .next {
        right: 20px;
        text-align: right;
      }

      .tt {
        img {
          padding-top: 10px;
          height: 20px;
        }
      }

      .item {
        span {
          width: 50px;
          display: block;
          text-align: center;
          font-size: 12px;
          color: #fff;
          font-family: txl;
        }
      }
    }
}
.v-enter-active,
.v-leave-active {
  transition: all .8s ease;
}

.v-enter,
.v-leave-to {
  transform: translateX(100px);
  opacity: 0;
}
</style>
