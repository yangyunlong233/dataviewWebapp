<template>
  <div class="map-enterprise" id="mapEnterprise">
    <div class="enterprise">
      <div class="prev"><img src="../../../assets/images/icon_arrow_prev.svg"></div>
      <div class="next"><img src="../../../assets/images/icon_arrow_next.svg"></div>
      <ul>
        <li v-for="item, index in chartData" :key="index" v-show="index == count">
          <div class="en-cont">
            <img src="../../../assets/images/icon_map_enterprise.svg">
            <h4><i class="txb">{{item.name}}</i><span class="txl">{{item.rem}}万元</span></h4>
            <div class="line"><i :style="{width: item.x}"></i></div>
            <div class="info txl">当地产值排名第{{item.ps}}<span class="txl">{{item.x}}</span></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mapEnterprise',
  data () {
    return {
      count: 0,
      chartData: [
        {
          name: '陕西东裕生物科技股份有限公司',
          rmb: '12000',
          x: '85%',
          ps: '1'
        },
        {
          name: '宁强县千山茶业公司',
          rmb: '5800',
          x: '76%',
          ps: '2'
        },
        {
          name: '南郑县汉山茶叶有限公司',
          rmb: '5650',
          x: '89%',
          ps: '3'
        }
      ]
    }
  },
  mounted () {
    this.setAnimation()
  },
  methods: {
    setAnimation () {
      setInterval(() => {
        if (this.count < this.chartData.length - 1) {
          this.count++
        } else {
          this.count = 0
        }
      }, 2000)
    }
  }
}
</script>

<style lang="scss" scoped>
.map-enterprise {
  position: absolute;
  z-index: 9;
  left: 50%;
  transform: translateX(-50%);
  bottom: 20px;
  width: 660px;

  // background: rgba(#002208, .3);

  .enterprise {
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    height: 70px;

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

    .en-cont {
      width: 85%;
      margin: 0 auto;

      img {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 50px;
      }

      h4 {
        position: relative;
        margin: 0 0 0 40px;
        font-size: 16px;
        color: #fff;

        span {
          position: absolute;
          right: 0;
          font-size: 16px;
        }
      }

      .line {
        position: relative;
        margin: 10px 0 10px 40px;
        height: 6px;
        background: rgba(#073419, .6);
        border-radius: 10px;

        i {
          margin: 0;
          padding: 0;
          display: block;
          height: 6px;
          background: linear-gradient(90deg, #FA9600 0%, #00EE98 102.49%);
          border-radius: 10px;
        }
      }

      .info {
        position: relative;
        font-size: 16px;
        color: #fff;
        margin-left: 40px;

        span {
          position: absolute;
          right: 0;
          font-size: 16px;
        }
      }
    }
  }
}
</style>
