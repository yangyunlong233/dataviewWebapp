<template>
  <div class="map-area" id="mapArea">
    <div class="area-total">
      <img class="icon" src="../../../assets/images/icon_map_tt.svg">
      <h2><i class="txb">{{ anchor.name }}</i></h2>
      <div class="cont">
        <div class="item">
          <h3>茶区面积（万亩）</h3>
          <div class="data">
            <span class="line" :style="{width: anchor.d1p}"><i></i></span>
            <span class="d1"><i class="ubm">{{ anchor.d1 }}</i></span>
          </div>
        </div>
        <div class="item">
          <h3>经济总量（万元）</h3>
          <div class="data">
            <span class="line" :style="{width: anchor.d2p}"><i></i></span>
            <span class="d1"><i class="ubm">{{ anchor.d2 }}</i></span>
          </div>
        </div>
        <div class="item">
          <h3>溯源码数（个）</h3>
          <div class="data">
            <span class="line" :style="{width: anchor.d3p}"><i></i></span>
            <span class="d1"><i class="ubm">{{ anchor.d3 }}</i></span>
          </div>
        </div>
        <div class="item">
          <h3>茶企数量（家）</h3>
          <div class="data">
            <span class="line" :style="{width: anchor.d4p}"><i></i></span>
            <span class="d1"><i class="ubm">{{ anchor.d4 }}</i></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mapArea',
  data () {
    return {
      xixiangxian: {
        name: '西乡县',
        d1: '92923',
        d1p: '100%',
        d2: '28372',
        d2p: '60%',
        d3: '29191923',
        d3p: '70%',
        d4: '8342',
        d4p: '50%'
      },
      chengguxian: {
        name: '城固县',
        d1: '882893',
        d1p: '90%',
        d2: '23923',
        d2p: '30%',
        d3: '234234',
        d3p: '40%',
        d4: '4522',
        d4p: '70%'
      },
      ningqiangxian: {
        name: '宁强县',
        d1: '273849',
        d1p: '67%',
        d2: '23823',
        d2p: '36%',
        d3: '23422',
        d3p: '40%',
        d4: '1394',
        d4p: '30%'
      },
      zhenbaxian: {
        name: '镇巴县',
        d1: '5878823',
        d1p: '36%',
        d2: '23923',
        d2p: '30%',
        d3: '7739',
        d3p: '10%',
        d4: '2394',
        d4p: '60%'
      },
      anchor: {
        name: '西乡县',
        d1: '92923',
        d1p: '100%',
        d2: '28372',
        d2p: '60%',
        d3: '29191923',
        d3p: '70%',
        d4: '8342',
        d4p: '50%'
      }
    }
  },
  mounted () {
    setInterval(() => {
      console.log(this.anchor.name)
      if (this.anchor.name === '西乡县') {
        this.anchor = this.chengguxian
      } else if (this.anchor.name === '城固县') {
        this.anchor = this.ningqiangxian
      } else if (this.anchor.name === '宁强县') {
        this.anchor = this.zhenbaxian
      } else if (this.anchor.name === '镇巴县') {
        this.anchor = this.xixiangxian
      }
    }, 3400)
  }
}
</script>

<style lang="scss" scoped>
.map-area {
  position: absolute;
  z-index: 9;
  top: 110px;
  left: 630px;
  width: 495px;

  // background: rgba(#002208, .3);
  .area-total {
    .icon {
      position: absolute;
      z-index: 99;
      top: 10px;
      left: 0;
    }

    h2 {
      position: absolute;
      top: 10px;
      left: 50px;
      font-size: 20px;
      color: #fff;
    }

    .cont {
      position: absolute;
      z-index: 9;
      top: 40px;
      left: 20px;
      border-left: 1px solid rgba(#fff, .3);
      padding-left: 30px;

      .item {
        margin: 20px 0;

        h3,
        span {
          font-size: 12px;
          color: #fff;
        }

        h3 {
          font-weight: bold;
          margin: 0 0 10px;
        }

        .data {
          white-space: nowrap;
        }

        span {
          display: inline-block;
        }

        .line {
          width: 200px;
          margin-right: 10px;
          transition: all .5s;

          i {
            display: inline-block;
            width: 100%;
            height: 10px;
            background: linear-gradient(90deg, #FA9600 0%, #00EE98 102.49%);
            border-radius: 10px;
          }
        }
      }
    }

    .cont:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: -3px;
      width: 5px;
      height: 5px;
      background: rgba(#fff, .6);
      border-radius: 5px;
    }
  }
}
</style>
